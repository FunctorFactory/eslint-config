import eslint from '@eslint/js';
import { TSESLint } from '@typescript-eslint/utils';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier/recommended';
import imptSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const JAVASCRIPT_COMMONJS = ['**/*.cjs'];
const JSX = ['**/*.jsx'];
const JAVASCRIPT_MODULE = ['**/*.js', '**/*.mjs'];
const ALL_JAVASCRIPT = [...JAVASCRIPT_COMMONJS, ...JAVASCRIPT_MODULE, ...JSX];

const TYPESCRIPT_TSX = ['**/*.tsx'];
const TYPESCRIPT = ['**/*.ts'];
const ALL_TYPESCRIPT = [...TYPESCRIPT, ...TYPESCRIPT_TSX];

export const getConfig: (
  tsconfigRootDir: string,
) => TSESLint.FlatConfig.ConfigArray = (tsconfigRootDir) =>
  tseslint.config(
    {
      ignores: [
        'node_modules',
        'pnpm-lock.yaml',
        'package-lock.json',
        'yarn.lock',
        '.changeset',
        'dist',
      ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked.map((conf) => ({
      ...conf,
      files: ALL_TYPESCRIPT,
      ignores: ['*.config.ts'],
    })),
    ...tseslint.configs.strictTypeChecked.map((conf) => ({
      ...conf,
      files: ALL_TYPESCRIPT,
      ignores: ['*.config.ts'],
    })),
    {
      files: ALL_TYPESCRIPT,
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir,
        },
      },
    },
    {
      files: ALL_JAVASCRIPT,
      ...jsdoc.configs['flat/recommended'],
    },
    {
      files: ALL_TYPESCRIPT,
      ...jsdoc.configs['flat/recommended-typescript'],
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
    {
      files: [...ALL_JAVASCRIPT, ...ALL_TYPESCRIPT],
      ...prettier,
    },
  );

export default getConfig;
