import { TSESLint } from '@typescript-eslint/utils';
import functional from 'eslint-plugin-functional/flat';

import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';

const CommonConfig: TSESLint.FlatConfig.ConfigArray = [
  functional.configs.recommended,
  functional.configs.externalVanillaRecommended,
].map((conf) => ({
  ...conf,
  files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
}));

const JSConfig: TSESLint.FlatConfig.ConfigArray = [
  {
    files: ALL_JAVASCRIPT,
    ...functional.configs.disableTypeChecked,
  },
];

const TSConfig: TSESLint.FlatConfig.ConfigArray = [
  {
    files: ALL_TYPESCRIPT,
    ...functional.configs.externalTypescriptRecommended,
  },
];

export const Config: TSESLint.FlatConfig.ConfigArray = [
  ...CommonConfig,
  ...JSConfig,
  ...TSConfig,
];
