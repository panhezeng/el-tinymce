module.exports = {
  root: true,
  env: {
    browser: true
  },
  plugins: ["prettier"],
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/vue"
  ],
  rules: {
    "prettier/prettier": "error",
    "vue/no-v-html": "off",
    "vue/no-unused-vars": "off",
    "no-var": "error"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    tinymce: "readonly"
  }
};
