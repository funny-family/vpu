/**
 * @typedef { import("eslint").Linter.Config } EsLintConfig
 */

require('@rushstack/eslint-patch/modern-module-resolution');
const { googleConfig } = require('./eslint/google-config.rules');
const { additionalsConfig } = require('./eslint/additionals.rules');

/** @type {EsLintConfig} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    ...googleConfig,
    ...additionalsConfig,
  },
  overrides: [],
};
