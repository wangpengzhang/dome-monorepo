/**
 * ESLint 配置文件
 * 使用 ESLint Flat Config 格式（ESLint 9+ 推荐）
 */

// 导入 ESLint 核心模块和插件
import { defineConfig } from "eslint/config"; // ESLint 配置定义函数
import eslint from "@eslint/js"; // ESLint 官方推荐规则
import tseslint from "typescript-eslint"; // TypeScript ESLint 插件
import eslintPluginPrettier from "eslint-plugin-prettier"; // Prettier 插件集成
import eslintPluginVue from "eslint-plugin-vue"; // Vue.js ESLint 插件
import globals from "globals"; // 全局变量定义
import eslintConfigPrettier from "eslint-config-prettier"; // 禁用与 Prettier 冲突的规则

/**
 * 全局忽略模式
 * 这些文件/目录将被所有配置块忽略
 */
const ignores = [
    "**/dist/**", // 构建产物目录
    "**/node_modules/**", // Node.js 依赖目录
    ".*", // 隐藏文件（如 .git, .env）
    "scripts/**", // 脚本目录
    "**/*.d.ts" // TypeScript 类型声明文件
];

/**
 * ESLint 多配置数组
 * 每个配置块按顺序执行，后配置块会覆盖前配置块的规则
 */
export default defineConfig(
    /**
     * 配置块 1: 基础配置（适用于所有文件）
     * 包含通用的 JavaScript/TypeScript 规则
     */
    {
        ignores, // 应用全局忽略模式
        extends: [
            eslint.configs.recommended, // ESLint 官方推荐规则
            ...tseslint.configs.recommended, // TypeScript ESLint 推荐规则（展开运算符）
            eslintConfigPrettier // 禁用与 Prettier 冲突的规则
        ],
        plugins: {
            prettier: eslintPluginPrettier // 注册 Prettier 插件
        },
        languageOptions: {
            ecmaVersion: "latest", // 使用最新 ECMAScript 版本
            sourceType: "module", // 使用 ES Module 语法
            parser: tseslint.parser // 使用 TypeScript 解析器
        },
        rules: {
            "no-var": "error" // 禁止使用 var 声明变量（强制使用 let/const）
        }
    },

    /**
     * 配置块 2: 前端/Vue 文件配置
     * 仅适用于 frontend 和 components 目录下的文件
     */
    {
        ignores,
        files: [
            "apps/frontend/**/*.{js,jsx,ts,tsx,vue}", // 前端应用文件
            "packages/components/**/*.{js,jsx,ts,tsx,vue}" // UI 组件库文件
        ],
        extends: [
            ...eslintPluginVue.configs["flat/recommended"], // Vue 官方推荐规则（Flat Config 格式）
            eslintConfigPrettier // 确保与 Prettier 兼容
        ],
        languageOptions: {
            globals: {
                ...globals.browser // 注入浏览器环境全局变量（window, document 等）
            }
        }
    },

    /**
     * 配置块 3: 后端/Node.js 文件配置
     * 仅适用于 backend 目录下的文件
     */
    {
        ignores,
        files: ["apps/backend/**/*.{js,ts}"], // 后端服务文件
        languageOptions: {
            globals: {
                ...globals.node // 注入 Node.js 环境全局变量（require, __dirname 等）
            }
        }
    }
);
