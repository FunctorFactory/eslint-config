import getConfig from './dist/index.js';

const config = getConfig({
  parserOptions: {
    project: './tsconfig.json',
  },
});

export default config;
