import * as tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

import { ALL_TYPESCRIPT } from './fileExtensions.js';

const defaultIgnores = [
  '**/node_modules',
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock',
  '.changeset',
  '**/dist',
  '**/build',
  '**/docs',
  '**/*.md',
] as const;

export const Config = tseslint.config(
  {
    ignores: [...defaultIgnores],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],

    files: ALL_TYPESCRIPT,
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          args: 'all',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.property.name='push'] > SpreadElement.arguments",
          message: 'Do not use spread arguments in Array.push',
        },
      ],
      '@typescript-eslint/array-type': [
        'warn',
        {
          readonly: 'generic',
          default: 'generic',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',

      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-array-constructor': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/member-delimiter-style': 0,

      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/camelcase': 'off',
      'no-irregular-whitespace': 'off',
      'prefer-destructuring': 'off',
      'object-shorthand': 'error',
      'prefer-rest-params': 'off',
      'no-fallthrough': 'off',
      'no-unused-vars': 'off',
      'prefer-spread': 'off',
      'sort-imports': 'off',
    },
  },
);
