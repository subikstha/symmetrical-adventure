import type { CollectionConfig } from 'payload';

import { formatSlug } from '@/lib/utils';

export const Categories: CollectionConfig = {
  slug: 'categories',
  versions: {
    drafts: true,
  },
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', '_status', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
      admin: {
        description: 'Leave empty to auto-generate from name',
      },
    },
  ],
};
