import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig } from 'eslint/config';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPluginPrettierRecommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['components/ui/**', 'node_modules/**', '.next/**'],

    plugins: {
      '@typescript-eslint': tsPlugin,
      perfectionist,
    },

    rules: {
      camelcase: 'off',
      'no-undef': 'off',

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ========================
      // Import Sorting (Ladder / Line Length)
      // ========================
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          groups: [
            'type',
            'react',
            'next',
            'builtin',
            'external',
            'components',
            'internal',
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
          customGroups: [
            { groupName: 'react', elementNamePattern: '^react$' },
            { groupName: 'next', elementNamePattern: '^next' },
            { groupName: 'components', elementNamePattern: '^@/components' },
          ],
          internalPattern: ['^@/.*'],
        },
      ],
      'perfectionist/sort-exports': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-named-imports': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-interfaces': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-object-types': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-objects': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-jsx-props': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-maps': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-sets': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-enums': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-classes': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-array-includes': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-union-types': ['error', { type: 'line-length', order: 'asc' }],
      'perfectionist/sort-intersection-types': ['error', { type: 'line-length', order: 'asc' }],

      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      // Enforce Absolute Imports
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*'],
              message:
                'Usage of relative parent imports is not allowed. Use absolute imports instead.',
            },
          ],
        },
      ],

      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          printWidth: 100,
          tabWidth: 2,
        },
      ],
    },
  },

  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'app/(payload)/admin/importMap.js',
    ],
  },
]);
