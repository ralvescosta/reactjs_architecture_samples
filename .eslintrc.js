module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:cypress/recommended"
  ],
  "env": {
    "cypress/globals": true
  },
  "plugins": ["react", "cypress"],
  "parserOptions": {
    "project": "./tsconfig-eslint.json"
  },
  "rules": {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/require-await": "off",
    "no-redeclare": "off",
    "import/export": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}