export const JAVASCRIPT_COMMONJS = ['**/*.cjs'];
export const JSX = ['**/*.jsx'];
export const JAVASCRIPT_MODULE = ['**/*.js', '**/*.mjs'];
export const ALL_JAVASCRIPT = [
  ...JAVASCRIPT_COMMONJS,
  ...JAVASCRIPT_MODULE,
  ...JSX,
];

export const TYPESCRIPT_TSX = ['**/*.tsx'];
export const TYPESCRIPT = ['**/*.ts'];
export const ALL_TYPESCRIPT = [...TYPESCRIPT, ...TYPESCRIPT_TSX];
