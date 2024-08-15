import pluginReact from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser'; // Importe o parser corretamente

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: parser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': pluginTypescript,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
];
