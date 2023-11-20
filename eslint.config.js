import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import functional from 'eslint-plugin-functional';
import jest from 'eslint-plugin-jest';
import jestExtended from 'eslint-plugin-jest-extended';
import jestFormat from 'eslint-plugin-jest-formatting';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import impt from 'eslint-plugin-import';
import importSort from 'eslint-plugin-simple-import-sort';
import keysSort from 'eslint-plugin-sort-destructure-keys';
import codegen from 'eslint-plugin-codegen';

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
  // Recommended JS
  {
    files: ALL_JAVASCRIPT,
    ...js.configs.recommended,
  },
  // Recommended TS
  {
    files: ALL_TYPESCRIPT,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      }
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended-type-checked'].rules,
      ...ts.configs['stylistic-type-checked'].rules,
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
  // Import
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    plugins: { import: impt },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      }
    },
    rules: {
      ...impt.configs.recommended.rules,
    },
  },
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    plugins: { 'simple-import-sort': importSort },
    rules: {
      'simple-import-sort/imports': "error",
      'simple-import-sort/exports': "error",
    },
  },
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    plugins: { 'sort-destructure-keys': keysSort },
    rules: {
      'sort-destructure-keys/sort-destructure-keys': "error",
    },
  },
  // Functional
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    ignores: TEST_FILES,
    plugins: {
      functional,
    },
    ...functional.configs['external-vanilla-recommended'],
  },
  {
    files: ALL_TYPESCRIPT,
    ignores: TEST_FILES,
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
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT, '**/.*md'],
    plugins: {
      codegen
    },
    rules: {
      'codegen/codegen': 'error',
    }
  },
  {
    files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
    plugins: {
      prettier
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
    }
  },
];
