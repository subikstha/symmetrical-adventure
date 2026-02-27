import type { CollectionConfig } from 'payload';

import { formatSlug } from '@/lib/utils';
import { revalidateOnChange } from '@/hooks/revalidateOnChange';

export const Posts: CollectionConfig = {
  slug: 'posts',
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateOnChange],
  },
  labels: {
    plural: 'Posts',
    singular: 'Post',
  },
  admin: {
    defaultColumns: ['title', '_status', 'slug', 'createdAt'],
  },
  fields: [
    {
      type: 'tabs',
      label: 'Content',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              type: 'text',
              name: 'title',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              unique: true,
              hooks: {
                beforeValidate: [formatSlug('title')],
              },
              admin: {
                description: 'Leave empty to auto-generate from name',
              },
            },
            {
              type: 'text',
              name: 'excerpt',
            },
            {
              name: 'content',
              type: 'richText',
            },
            {
              type: 'group',
              name: 'authorAndMetaData',
              label: 'Author & Meta Data',
              fields: [
                {
                  name: 'author',
                  relationTo: 'users',

                  type: 'relationship',
                },
                {
                  hasMany: true,
                  name: 'categories',
                  type: 'relationship',
                  relationTo: 'categories',
                },
                {
                  name: 'tags',
                  hasMany: true,
                  relationTo: 'tags',
                  type: 'relationship',
                },
              ],
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              type: 'upload',
              relationTo: 'media',
              name: 'featuredImage',
            },
            {
              hasMany: true,
              type: 'upload',
              name: 'gallery',
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              type: 'text',
              name: 'seoTitle',
            },
            {
              type: 'text',
              name: 'seoDescription',
            },
            {
              type: 'text',
              hasMany: true,
              name: 'seoKeywords',
            },
          ],
        },
      ],
    },
  ],
};
