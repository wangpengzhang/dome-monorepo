import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

const ignores = ["**/dist/**", "**/node_modules/**", ".*", "scripts/**", "**/*.d.ts"];

export default defineConfig(
    {
        ignores,
        extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
        plugins: {
            prettier: eslintPluginPrettier
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tseslint.parser
        },
        rules: {
            "no-var": "error"
        }
    },
    {
        ignores,
        files: ["apps/frontend/**/*.{js,jsx,ts,tsx,vue}", "packages/components/**/*.{js,jsx,ts,tsx,vue}"],
        extends: [...eslintPluginVue.configs["flat/recommended"], eslintConfigPrettier],
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    },
    {
        ignores,
        files: ["apps/backend/**/*.{js,ts}"],
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    }
);
