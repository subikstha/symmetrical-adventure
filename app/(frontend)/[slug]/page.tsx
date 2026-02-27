import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { getPayload } from 'payload';

import { BlockRenderer } from '@/components/BlockRenderer';
import { LivePreviewRenderer } from '@/components/LivePreviewRenderer';

import config from '@/payload.config';

export const revalidate = 86400; // 1 day – must be a literal for static analysis

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled: isDraft } = await draftMode();
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    draft: isDraft,
    collection: 'pages',
    where: { slug: { equals: slug } },
  });

  const page = docs[0];

  if (!page) {
    return notFound();
  }

  if (isDraft) {
    return <LivePreviewRenderer initialData={page} />;
  }

  return (
    <main>
      <BlockRenderer blocks={page.layout} />
    </main>
  );
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    limit: 0,
    collection: 'pages',
  });

  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}
