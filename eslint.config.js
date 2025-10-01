// Added By Bhushan on 01_10_2025
import js from '@eslint/js';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2023,
      },
    },
    plugins: {
      import: pluginImport,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'import/no-unresolved': 'off',
    },
  },
  prettier,
];


