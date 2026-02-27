import type { Page } from '@/payload-types';

export type BlockType<T extends NonNullable<Page['layout']>[number]['blockType']> = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: T }
>;
