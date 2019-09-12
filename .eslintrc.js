module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y', '@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    // 'import/resolver': {
    //   typescript: {},
    // },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/test.tsx',
          '**/test.ts',
          '**/*.stories.js',
          '**/*.stories.ts',
          '**/*.stories.jsx',
          '**/*.stories.tsx',
        ],
      },
    ],
    '@typescript-eslint/indent': [2, 2],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
};
