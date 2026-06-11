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
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
];

export default config;
