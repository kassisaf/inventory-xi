module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'unused-imports', 'jsx-a11y', 'prettier'],
  rules: {
    'no-console': 'warn',
    'no-empty-function': 'warn',
    'prettier/prettier': [
      'warn',
      {
        usePrettierrc: true,
      },
    ],
  },
}
