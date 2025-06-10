import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  publicDir: true,
  sourcemap: true,
  clean: true,
  dts: true,
});
