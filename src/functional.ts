import functional from 'eslint-plugin-functional';
import * as tseslint from 'typescript-eslint';

import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';

export const Config = tseslint.config(
  {
    files: ALL_TYPESCRIPT,
    extends: [
      functional.configs.externalVanillaRecommended,
      functional.configs.externalTypeScriptRecommended,
      functional.configs.recommended,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ALL_JAVASCRIPT,
    extends: [
      functional.configs.externalVanillaRecommended,
      functional.configs.recommended,
      functional.configs.disableTypeChecked,
    ],
  },
);

export default Config;
