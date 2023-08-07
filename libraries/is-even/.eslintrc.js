/* In case of Eslint parsing error, replace './tsconfig.json' assigned for 'project' property of  parserOptions
  with './tsconfig.eslint.json' */
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
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        // This rule requires the TypeScript type checker to be present when it runs
        '@typescript-eslint/await-thenable': 'error',
      },
    },
  ],
};
