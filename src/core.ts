import eslint from '@eslint/js';
import * as tseslint from 'typescript-eslint';

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
    files: ALL_TYPESCRIPT,
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
  },
);
