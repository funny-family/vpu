import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
// import svgLoader from 'vite-svg-loader';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
      name: 'pu-vue',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx({ enableObjectSlots: false }),
    dts({ insertTypesEntry: true }),
    // svgLoader(),
  ],
});
