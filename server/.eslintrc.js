module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    // Don't error for resolver decorator type annotations:
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "type|returns|of|unused" }],
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    "prettier/prettier": [
      "error",
      {
        semi: true,
        printWidth: 100,
      },
    ],
  },
};
