import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import securityPlugin from "eslint-plugin-security";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      security: securityPlugin,
    },
    rules: {
      // Possible Errors
      "no-unused-vars": "warn", // Warn about unused variables
      // "no-undef": "error", // Disallow the use of undeclared variables
      "no-extra-semi": "error", // Disallow unnecessary semicolons

      // Stylistic Issues
      semi: ["error", "always"], // Require semicolons at the end of statements
      quotes: ["error", "double"], // Enforce the use of double quotes
      indent: ["warn", 2], // Enforce 2-space indentation
      "no-trailing-spaces": "warn", // Disallow trailing whitespace at the end of lines
      "comma-dangle": ["warn", "always-multiline"], // Require or disallow trailing commas

      // Security Rules
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-non-literal-regexp": "warn",
      "security/detect-unsafe-regex": "warn",

      // Best Practices
      "no-console": "warn", // Disallow the use of console
      eqeqeq: "warn", // Require the use of === and !==
      "no-eval": "warn", // Disallow the use of eval()
      "no-implied-eval": "warn", // Disallow the use of implied eval()
      "no-extend-native": "warn", // Disallow extending native prototypes
      "no-extra-bind": "warn", // Disallow unnecessary calls to .bind()
      "no-loop-func": "warn", // Disallow function declarations and expressions inside loops
      "no-param-reassign": "warn", // Disallow reassigning function parameters
      "no-return-assign": "warn", // Disallow assignment operators in return statements
      "no-shadow": "warn", // Disallow variable shadowing
    },
  },
];
