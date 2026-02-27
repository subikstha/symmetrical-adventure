# Caching & On-Demand Revalidation

## Overview

This project uses **Next.js ISR (Incremental Static Regeneration)** combined with **Payload CMS `afterChange` hooks** to deliver fast, cached pages that automatically refresh when content is updated.

## How It Works

### 1. Page Caching (ISR)

Both the homepage (`app/(frontend)/page.tsx`) and dynamic pages (`app/(frontend)/[slug]/page.tsx`) export:

```ts
export const revalidate = 86400; // Cache for 1 day (24 hours)
```

This tells Next.js to:

- **Serve cached HTML** to visitors for up to 24 hours.
- **Regenerate the page in the background** after the cache expires on the next request.

### 2. Static Generation

Dynamic pages use `generateStaticParams()` to **pre-render all pages at build time**:

```ts
export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: 'pages', limit: 0 });
  return docs.map((doc) => ({ slug: doc.slug }));
}
```

### 3. On-Demand Revalidation via Payload Hook

The `revalidateOnChange` hook (`hooks/revalidateOnChange.ts`) is attached to the `Pages` and `Posts` collections. It runs every time a document is created or updated:

```ts
export const revalidateOnChange: CollectionAfterChangeHook = ({
  collection,
  doc,
  req: { payload },
}) => {
  const slug = doc?.slug as string | undefined;
  const collectionSlug = collection.slug;

  if (!slug) return doc;

  const path = slug === 'home' ? '/' : `/${slug}`;

  payload.logger.info(`Revalidating: ${collectionSlug} → ${path}`);

  // Purge the ISR cache for this specific path
  revalidatePath(path, 'page');

  // Also revalidate by collection tag (useful for list pages)
  revalidateTag(collectionSlug, 'default');

  return doc;
};
```

#### What it does:

| Function                             | Purpose                                                  |
| ------------------------------------ | -------------------------------------------------------- |
| `revalidatePath(path, 'page')`       | Purges cached HTML for the specific page (e.g. `/about`) |
| `revalidateTag(collectionSlug, ...`) | Purges any `fetch()` tagged with the collection slug     |

### 4. Hook Registration

The hook is registered in each collection's config:

**Pages** (`collections/Pages.ts`):

```ts
hooks: {
  afterChange: [revalidateOnChange],
}
```

**Posts** (`collections/Posts.ts`):

```ts
hooks: {
  afterChange: [revalidateOnChange],
}
```

## Flow Diagram

```
Editor saves content in Payload CMS
            │
            ▼
   afterChange hook fires
            │
     ┌──────┴──────┐
     │             │
revalidatePath  revalidateTag
     │             │
     └──────┬──────┘
            │
   Next visitor gets fresh content
```

## Important Notes

- **Development mode** (`pnpm run dev`): Caching is disabled; every request is re-rendered.
- **Production** (`pnpm build && pnpm start`): Full ISR caching is active.
- The `revalidateTag` function in Next.js 15+ requires a second `profile` parameter (e.g. `'default'`).
