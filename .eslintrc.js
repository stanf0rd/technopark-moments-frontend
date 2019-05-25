module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'class-methods-use-this': ['error', { exceptMethods: [] }],
    'no-console':'off',
    'no-multi-spaces':'off',
    // 'linebreak-style':'off',
    // 'key-spacing': ['error', { 'mode': 'minimum' }],
    // 'no-prototype-builtins':'off',
    // 'one-var': ['error', {initialized: 'never', uninitialized: 'always'}],
    // 'one-var-declaration-per-line':'off',
    // 'no-underscore-dangle': 0
  }
};
