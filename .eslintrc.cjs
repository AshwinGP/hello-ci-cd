// Added By Bhushan on 01_10_2025
/* eslint-env node */
const js = require('@eslint/js');
const globals = require('globals');

module.exports = {
  root: true,
  languageOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    globals: {
      ...globals.node,
      ...globals.es2023,
    },
  },
  plugins: ['import'],
  extends: [js.configs.recommended, 'plugin:import/recommended', 'prettier'],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/no-unresolved': 'off',
  },
  ignorePatterns: ['dist/**', 'node_modules/**'],
};

