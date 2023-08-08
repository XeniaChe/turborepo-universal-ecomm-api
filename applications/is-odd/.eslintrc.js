module.exports = {
  root: true,
  extends: ['custom'],

  rules: {
    // Add some rules that will be applied LOCALY for a given package and take PRECEDENCE over those declared in 'custom' configs
  },
  // *** https://nx.dev/recipes/tips-n-tricks/eslint ***
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        // This rule requires the TypeScript type checker to be present when it runs
        '@typescript-eslint/await-thenable': 'error',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.spec.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
