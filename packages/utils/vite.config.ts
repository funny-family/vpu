import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import projectPackage from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
      name: 'pu-utils',
    },
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
});

// https://stackoverflow.com/questions/71726084/how-do-i-make-vite-build-my-files-every-time-a-change-is-made
