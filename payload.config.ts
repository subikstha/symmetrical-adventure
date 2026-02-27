import sharp from 'sharp';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Tags } from './collections/Tags';
import { Pages } from './collections/Pages';
import { Users } from './collections/Users';
import { Posts } from './collections/Posts';
import { Media } from './collections/Media';
import { Announcement } from './global/Announcement';
import { Categories } from './collections/Categories';

const secret = process.env.PAYLOAD_SECRET;
if (!secret) {
  throw new Error('PAYLOAD_SECRET is not defined');
}

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export default buildConfig({
  sharp,
  secret,
  cors: [serverUrl],
  csrf: [serverUrl],
  editor: lexicalEditor(),
  globals: [Announcement],
  cookiePrefix: 'payload',
  collections: [Pages, Users, Posts, Media, Tags, Categories],
  graphQL: {
    schemaOutputFile: './graphql/schema.graphql',
  },
  db: postgresAdapter({
    pool: {
      connectionString,
    },
  }),
});
