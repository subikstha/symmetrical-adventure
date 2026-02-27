import type { CollectionAfterChangeHook } from 'payload';

import { revalidateTag, revalidatePath } from 'next/cache';

/**
 * Revalidates the cached page when content changes in Payload CMS.
 * Attach this as an `afterChange` hook to any collection that maps to a frontend route.
 */
export const revalidateOnChange: CollectionAfterChangeHook = ({
  doc,
  collection,
  req: { payload },
}) => {
  const slug = doc?.slug as string | undefined;
  const collectionSlug = collection.slug;

  if (!slug) return doc;

  // Determine the frontend path from the slug
  const path = slug === 'home' ? '/' : `/${slug}`;

  payload.logger.info(`Revalidating: ${collectionSlug} → ${path}`);

  // Purge the ISR cache for this specific path
  revalidatePath(path, 'page');

  // Also revalidate by collection tag (useful for list pages)
  revalidateTag(collectionSlug, 'default');

  return doc;
};
