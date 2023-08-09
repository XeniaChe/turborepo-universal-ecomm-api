module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // TODO check why
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '**/*.ts'],
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        // This rule requires the TypeScript type checker to be present when it runs
        '@typescript-eslint/await-thenable': 'error',
      },
    },
    // TODO: check if needed
    {
      files: ['**/*.test.ts', '**/*.spec.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
