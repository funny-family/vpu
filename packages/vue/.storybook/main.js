/**
 * @typedef { import("@storybook/core-common").StorybookConfig } StorybookConfig
 */

const { resolve } = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');
const eslint = require('vite-plugin-eslint').default;

/** @type {StorybookConfig} */
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
  async viteFinal(previousConfig) {
    const { config } = await loadConfigFromFile(
      resolve(__dirname, '../vite.config.ts'),
    );

    return mergeConfig(previousConfig, {
      ...config,
      plugins: [
        eslint({
          exclude: [/virtual:/, /node_modules/, /dist/],
          // eslintPath: resolve(__dirname, '../.eslintrc.js'),
        }),
      ],
    });
  },
};
