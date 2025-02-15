module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/stylistic',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off', // Disable this rule if you don't want to enforce type vs interface
    '@typescript-eslint/explicit-function-return-type': 'error', // Example of enabling type checking for function return types
    '@typescript-eslint/no-unused-vars': 'error', // Example of enabling type checking for unused variables
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['next.config.js'],
};
