module.exports = {
  root: true,
  env: {
    browser: true
  },
  plugins: ["prettier"],
  extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    tinymce: "readonly"
  }
};
