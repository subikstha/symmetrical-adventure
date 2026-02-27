import { draftMode } from 'next/headers';

import { getPayload } from 'payload';

import { BlockRenderer } from '@/components/BlockRenderer';
import { LivePreviewRenderer } from '@/components/LivePreviewRenderer';

import config from '@/payload.config';

export const revalidate = 86400; // 1 day – must be a literal for static analysis

export default async function HomePage() {
  const { isEnabled: isDraft } = await draftMode();
  const payload = await getPayload({ config });

  if (isDraft) {
    const { docs } = await payload.find({
      draft: true,
      collection: 'pages',
      where: { slug: { equals: 'home' } },
    });

    const homePage = docs[0];
    if (homePage) {
      return <LivePreviewRenderer initialData={homePage} />;
    }
  }

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
  });

  const homePage = docs[0];

  if (homePage) {
    return (
      <main>
        <BlockRenderer blocks={homePage.layout} />
      </main>
    );
  }

  return <div>Hello Hello</div>;
}
