import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import lodash from 'eslint-plugin-lodash';
import lodashFp from 'eslint-plugin-lodash-fp';
import functional from 'eslint-plugin-functional';
import jest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import jestFormat from 'eslint-plugin-jest-formatting';

import path from 'path';

import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';

// This is needed for configs that don't support the Flat Config system
// yet. @see
// https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const JAVASCRIPT_COMMONJS = ['**/*.cjs'];
const JSX = ['**/*.jsx'];
const JAVASCRIPT_MODULE = ['**/*.js', '**/*.mjs'];
const ALL_JAVASCRIPT = [...JAVASCRIPT_COMMONJS, ...JAVASCRIPT_MODULE, ...JSX];

const TYPESCRIPT_TSX = ['**/*.tsx'];
const TYPESCRIPT = ['**/*.ts'];
const ALL_TYPESCRIPT = [...TYPESCRIPT, ...TYPESCRIPT_TSX];

const TEST_FILES = ['**/*.test.(js|ts))', '**/test/**/*.(js|ts)'];

export default [
  // Ignores
  {
    ignores: [
      'node_modules',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      '.changeset',
    ],
  },
  // Prettier
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.jsx',
      '**/*.ts',
      '**/*.tsx',
    ],
    plugins: {
      prettier,
    },
    ...eslintConfigPrettier,
  },
  // Recommended JS
  {
    files: ALL_JAVASCRIPT,
    ...js.configs.recommended,
  },
  // Recommended TS
  {
    files: ALL_TYPESCRIPT,
    ...compat.config({
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unused-vars': [
          1,
          {
            vars: 'all',
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
      },
    }),
  },
  // JSDoc
  {
    files: ALL_JAVASCRIPT,
    plugins: {
      jsdoc,
    },
    ...jsdoc.configs['flat/recommended'],
  },
  {
    files: ALL_TYPESCRIPT,
    plugins: {
      jsdoc,
    },
    ...jsdoc.configs['flat/recommended-typescript'],
  },
  // Lodash
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    plugins: {
      lodash,
      lodashFp,
    },
    ...lodash.configs.recommended,
    ...lodashFp.configs.recommended,
  },
  // Functional
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    ignorePatterns: TEST_FILES,
    plugins: {
      functional,
    },
    ...functional.configs['external-vanilla-recommended'],
  },
  {
    files: ALL_TYPESCRIPT,
    ignorePatterns: TEST_FILES,
    ...functional.configs['external-typescript-recommended'],
    ...functional.configs.stylistic,
    rules: {
      'functional/prefer-immutable-types': 'off',
      'functional/functional-parameters': 'off',
    },
  },
  // Jest
  {
    files: TEST_FILES,
    plugins: {
      jest,
    },
    ...jest.configs.recommended,
    ...jest.configs.style,
  },
  {
    files: TEST_FILES,
    plugins: {
      jestExtended,
    },
    ...jestExtended.configs.recommended,
  },
  {
    files: TEST_FILES,
    plugins: {
      jestFormat,
    },
    ...jestFormat.configs.recommended,
  },
];
