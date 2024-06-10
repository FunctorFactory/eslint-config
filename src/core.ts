import eslint from '@eslint/js';
import { TSESLint } from '@typescript-eslint/utils';
import * as importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

import { Config } from './config.js';
import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const imprtPlg: TSESLint.Linter.Plugin = importPlugin;
const recommended = imprtPlg.configs.recommended;

export const getConfig = (
  config: Readonly<Config>,
): TSESLint.FlatConfig.ConfigArray => [
  eslint.configs.recommended,
  ...[
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ].map((conf) => ({
    ...conf,
    files: ALL_TYPESCRIPT,
  })),
  ...tseslint.configs.recommended.map((conf) => ({
    ...conf,
    files: ALL_JAVASCRIPT,
  })),
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    settings: {
      'imports/parsers': {
        '@typescript-eslint/parser': [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: config.parserOptions.project,
        },
      },
    },
    plugins: {
      import: imprtPlg,
    },
    rules: {
      ...recommended.rules,
      'import/no-deprecated': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-cycle': 'error',
      'import/no-relative-packages': 'error',
    },
  },
];
