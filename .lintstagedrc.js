/**
 * lint-staged 配置文件
 * 用于在 Git 暂存阶段（pre-commit）自动运行代码检查和格式化
 * 只对暂存的文件执行检查，提高效率
 */
export default {
    // 对这些文件执行拼写检查（cspell）
    // 适用文件类型：JavaScript、TypeScript、JSON、Vue、HTML、CSS、Markdown 等
    "*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}": ["cspell lint"],

    // 对这些文件执行格式化和 ESLint 检查
    // 执行顺序：先执行 prettier 格式化，再执行 eslint 检查
    // 适用文件类型：JavaScript、TypeScript、Vue、Markdown
    "*.{js,ts,vue,md}": ["prettier --write", "eslint"]
};
