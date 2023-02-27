/**
 * @typedef { import("eslint").Linter.Config } EsLintConfig
 */
require('@rushstack/eslint-patch/modern-module-resolution');
const { googleConfig } = require('../../eslint/google-config.rules');
const { additionalsConfig } = require('../../eslint/additionals.rules');

/** @type {EsLintConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    // 'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...googleConfig,
    ...additionalsConfig,
    // 'vue/prefer-import-from-vue': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        // 'plugin:vue/vue3-essential',
        // '@vue/eslint-config-typescript/recommended',
        // '@vue/eslint-config-prettier',
      ],
      plugins: ['@typescript-eslint', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
        // tsconfigRootDir: __dirname,
      },
      rules: {
        ...googleConfig,
        ...additionalsConfig,
      },
    },
  ],
};
