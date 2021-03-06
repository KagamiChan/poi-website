// @ts-check

/** @type { import("@types/eslint").Linter.Config } */
module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  settings: {
    react: {
      version: require('react').version,
    },
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'error'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/state-in-constructor': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/require-await': 'off',
  },
}
