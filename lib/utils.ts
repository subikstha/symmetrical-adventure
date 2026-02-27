import type { FieldHook } from 'payload';

import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase();

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, value, operation, originalDoc }) => {
    if (typeof value === 'string' && value) {
      return format(value);
    }

    if (operation === 'create') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback];

      if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData);
      }
    }

    return value;
  };
