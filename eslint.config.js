import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...prettier.rules, // Disable conflicting ESLint rules with Prettier
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
