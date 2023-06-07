module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'import/no-mutable-exports': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-useless-return': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    'max-len': [0, 120],
  },
};
