import type { CollectionConfig } from 'payload';

import { formatSlug } from '@/lib/utils';
import { HomeHeroBlock } from '@/blocks/home/config';
import { ContentBlock } from '@/blocks/content/config';
import { revalidateOnChange } from '@/hooks/revalidateOnChange';

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateOnChange],
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const path = data.slug !== 'home' ? `/${data.slug}` : '/';
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
        return `${serverUrl}/api/draft?url=${encodeURIComponent(path)}&secret=${process.env.DRAFT_MODE_SECRET}`;
      },
    },
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [ContentBlock, HomeHeroBlock],
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
      admin: {
        description: 'Leave empty to auto-generate from title',
      },
    },
  ],
};
