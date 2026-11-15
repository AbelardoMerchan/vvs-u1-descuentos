const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        module: "writable",
        require: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "warn",
      "curly": ["error", "all"],
      "no-console": "warn"
    }
  }
];
