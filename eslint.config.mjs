import globals from 'globals';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,ts}'],
  languageOptions: {
    parser: tsParser,
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  plugins: {
    '@typescript-eslint': ts
  },
  rules: {
    ...js.configs.recommended.rules,
    ...ts.configs.recommended.rules,
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'semi': ['error', 'always']
  }
};
