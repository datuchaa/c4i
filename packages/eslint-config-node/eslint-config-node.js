import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

/**
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  {
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/node_modules/**',
      '**/coverage/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];

export default config;
