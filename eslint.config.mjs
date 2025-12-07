import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig(
  [
    {
      // Note: there should be no other properties in this object
      ignores: ['dist/*', 'node_modules/*', 'package-lock.json'],
    },
    {
      files: ['**/*.{js,mjs,cjs}'],
      plugins: { js },
      extends: ['js/recommended'],
      languageOptions: { globals: globals.browser },
    },
  ],
  eslintConfigPrettier
);
