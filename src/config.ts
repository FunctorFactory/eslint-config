import { TSESLint } from '@typescript-eslint/utils';

export interface Config {
  readonly parserOptions: Readonly<TSESLint.ParserOptions>;
  readonly ignores: readonly string[];
}

const defaultParserOptions: TSESLint.ParserOptions = {
  parserOptions: {
    project: true,
    ecmaVersion: 'latest',
    lib: ['esnext'],
    jsDocParsingMode: 'type-info',
    emitDecoratorMetadata: true,
  },
};

const defaultIgnores = [
  'node_modules',
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock',
  '.changeset',
  'dist',
] as const;

export const defaultConfig: Config = {
  parserOptions: defaultParserOptions,
  ignores: defaultIgnores,
};
