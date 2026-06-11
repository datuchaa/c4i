import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
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
  tseslint.configs.base,
  eslintConfigPrettier,
  pluginReact.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      ...pluginReact.configs.flat['jsx-runtime'].languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
];

export default config;
