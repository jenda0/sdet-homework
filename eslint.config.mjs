import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
            "@typescript-eslint/no-floating-promises": "error",
            indent: ["error", 4],
            semi: ["error","always"],
            "no-multi-spaces": ["error"],
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: { globals: globals.browser }
    },
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/eslint.config.mjs'],
        extends: [tseslint.configs.disableTypeChecked],
    },
]);
