import React from 'react';

import { RichText } from '@payloadcms/richtext-lexical/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ContentBlockComponent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="container py-10">
      <div className="prose dark:prose-invert max-w-none">
        <RichText data={content} />
      </div>
    </div>
  );
};
