import functional from 'eslint-plugin-functional';
import * as tseslint from 'typescript-eslint';

import {
  ALL_JAVASCRIPT,
  ALL_TYPESCRIPT,
  TYPESCRIPT_TSX,
  JSX,
} from './fileExtensions.js';

export const Config = tseslint.config(
  {
    extends: [
      functional.configs.externalVanillaRecommended,
      functional.configs.externalTypeScriptRecommended,
      functional.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      parser: tseslint.parser,
    },
    files: ALL_TYPESCRIPT,
  },
  {
    extends: [
      functional.configs.externalVanillaRecommended,
      functional.configs.recommended,
      functional.configs.disableTypeChecked,
    ],
    files: ALL_JAVASCRIPT,
  },
  {
    rules: {
      'functional/no-conditional-statements': 'off',
      'functional/no-expression-statements': 'off',
      'functional/functional-parameters': 'off',
      'functional/no-return-void': 'off',
    },
    files: [...TYPESCRIPT_TSX, ...JSX],
  },
);

export default Config;
