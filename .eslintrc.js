module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'no-trailing-spaces': 'off',
    'consistent-return': 'off',
    indent: [2, 2],
    'no-param-reassign': 'off',
    'func-names': 'off',
    'no-unused-vars': 'warn',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    semi: 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-first-prop-new-line': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-shadow': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // 'import/no-useless-path-segments': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'warn',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
    'max-len': ['error', { ignoreComments: true, code: 180 }],
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': 'off',
    quotes: 'off',
    'no-unused-vars override': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['./scripts/generate-visual-json-report.js'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
        'wrap-iife': 'off',
        'semi-style': 'off',
      },
    },
  ],
}
