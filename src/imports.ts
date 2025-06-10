import * as importX from 'eslint-plugin-import-x';
import * as tseslint from 'typescript-eslint';

import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';

export const Config = tseslint.config(
  {
    extends: [importX.flatConfigs.recommended],
    files: ALL_JAVASCRIPT,
  },
  {
    extends: [importX.flatConfigs.recommended, importX.flatConfigs.typescript],
    files: ALL_TYPESCRIPT,
  },
);
