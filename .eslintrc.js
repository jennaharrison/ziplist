module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'arrow-parens': 'off',
    'func-names': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', 120],
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'prefer-arrow-callback': 'off',
  },

  ignorePatterns: [
    'node_modules/',
    '*.js',
  ],
};