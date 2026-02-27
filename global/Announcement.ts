import type { GlobalConfig } from 'payload';

export const Announcement: GlobalConfig = {
  slug: 'announcement',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      defaultValue: 'Available for new projects — Let’s talk!',
    },
    {
      name: 'link',
      type: 'text',
      defaultValue: '/contact',
    },
    {
      type: 'text',
      name: 'backgroundColor',
      defaultValue: '#000000',
    },
    {
      type: 'text',
      name: 'textColor',
      defaultValue: '#ffffff',
    },
    {
      type: 'checkbox',
      name: 'isEnabled',
      defaultValue: false,
      label: 'Show Announcement',
    },
  ],
};
