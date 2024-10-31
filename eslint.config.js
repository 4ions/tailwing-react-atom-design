import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginQuery from '@tanstack/eslint-plugin-query'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    plugins: {
      '@tanstack/query': pluginQuery,
    },
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: [
      'node_modules/*', // ignore its content
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 0,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]
