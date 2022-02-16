module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: ['plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: [],
  rules: {},
}
