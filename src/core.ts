import * as tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

import { ALL_TYPESCRIPT } from './fileExtensions.js';

const defaultIgnores = [
  'node_modules',
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock',
  '.changeset',
  'dist',
] as const;

export const Config = tseslint.config(
  {
    ignores: [...defaultIgnores],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    files: ALL_TYPESCRIPT,
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          args: 'all',
        },
      ],
    },
  },
);
