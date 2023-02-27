import { resolve } from 'path';
import { defineConfig } from 'vite';
// import { hyphenate } from '@vue/shared';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

// https://www.npmjs.com/package/vite-plugin-css-modules

// module.exports = defineConfig({
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
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        // console.log('"generateScopedName":', { name, filename, css });
        // console.log('"hyphenate(name)":', hyphenate(name));

        // // transform "mainHeader" class name to "main-header"
        // return hyphenate(name);
        return name;
      },
    },
  },
  plugins: [
    vue(),
    vueJsx({ enableObjectSlots: false }),
    dts({ insertTypesEntry: true }),
  ],
});
