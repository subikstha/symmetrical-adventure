import React from 'react';

import HomeHero from '@/blocks/home/home-hero';
import { ContentBlockComponent } from '@/blocks/content/Component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: Record<string, React.FC<any>> = {
  hero: HomeHero,
  content: ContentBlockComponent,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BlockRenderer: React.FC<{ blocks: any[] }> = ({ blocks }) => {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const Block = blockComponents[block.blockType];

        if (Block) {
          return <Block key={index} {...block} />;
        }

        return null;
      })}
    </>
  );
};
