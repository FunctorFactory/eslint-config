import { TSESLint } from '@typescript-eslint/utils';
import jsdoc from 'eslint-plugin-jsdoc';

import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';

export const Config: TSESLint.FlatConfig.ConfigArray = [
  {
    files: ALL_JAVASCRIPT,
    ...jsdoc.configs['flat/recommended'],
  },
  {
    files: ALL_TYPESCRIPT,
    ...jsdoc.configs['flat/recommended-typescript'],
  },
];
