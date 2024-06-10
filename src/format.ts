import { TSESLint } from '@typescript-eslint/utils';
import prettier from 'eslint-plugin-prettier/recommended';
import imptSort from 'eslint-plugin-simple-import-sort';

import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';

export const Config: TSESLint.FlatConfig.ConfigArray = [
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    ...prettier,
  },
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    plugins: {
      'simple-import-sort': imptSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
