import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script", // Plain JavaScript, not modules
      globals: {
        ...globals.browser,
        addTask: "writable" // Fixes the 'addTask' is defined but never used error
      }
    },
    rules: {
      "no-unused-vars": "off" // Optionally disable this rule if you prefer (or keep it "error" if you want strict checking)
    }
  },
  pluginJs.configs.recommended
];