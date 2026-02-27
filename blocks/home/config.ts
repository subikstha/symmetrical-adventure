import type { Block } from 'payload';

export const HomeHeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Home Hero',
    plural: 'Home Heroes',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
      defaultValue: 'Stories, Ideas & Insights',
    },
    {
      type: 'text',
      required: true,
      name: 'subtitle',
      defaultValue:
        'Exploring thoughts on design, development, and everything in between. One post at a time.',
    },
    {
      minRows: 1,
      maxRows: 2,
      name: 'cta',
      type: 'array',
      defaultValue: [
        {
          ctaLink: '/posts',
          cta: 'Read Latest Posts',
        },
        {
          ctaLink: '/categories',
          cta: 'Browse Categories',
        },
      ],
      fields: [
        {
          name: 'cta',
          type: 'text',
          required: true,
        },
        {
          type: 'text',
          required: true,
          name: 'ctaLink',
        },
      ],
    },
  ],
};
