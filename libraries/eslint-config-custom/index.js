module.exports = {
  extends: [
    'prettier',
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  rules: {
    // Add some rules that will be applied GLOBALY for all packages using this eslint-config package
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
