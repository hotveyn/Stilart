module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:vue/essential"],
  plugins: [],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
