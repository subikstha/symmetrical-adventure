import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  auth: {
    cookies: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    },
  },
  access: {
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
};
