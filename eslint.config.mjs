import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script", // Plain JavaScript, not modules
      globals: {
        ...globals.browser // Only browser globals, no addTask
      }
    }
  },
  pluginJs.configs.recommended
];