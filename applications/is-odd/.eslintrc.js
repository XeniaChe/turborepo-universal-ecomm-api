module.exports = {
  root: true,
  extends: ['custom'],
  /*   To leverage the rules which require type information for ALL files extensions.
  Use 'overrides' to configure this option ONLY for a specific file extensions (e.g. *.ts)
  
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  */
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
