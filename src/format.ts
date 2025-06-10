import prettier from 'eslint-plugin-prettier/recommended';
import perfectionist from 'eslint-plugin-perfectionist';
import { TSESLint } from '@typescript-eslint/utils';

import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';

export const Config: TSESLint.FlatConfig.ConfigArray = [
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    ...prettier,
  },
  perfectionist.configs['recommended-natural'],
  perfectionist.configs['recommended-line-length'],
];
