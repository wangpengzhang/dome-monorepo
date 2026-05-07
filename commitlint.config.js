/**
 * Commitlint 配置文件
 * 用于规范 Git Commit 提交信息格式
 * 集成 cz-git 提供交互式提交体验
 *
 * @type {import('cz-git').UserConfig}
 */
export default {
    // 继承官方的 Conventional Commits 规范配置
    extends: ["@commitlint/config-conventional"],

    /**
     * Commitlint 规则配置
     * 规则格式: [level, applicable, value]
     * - level: 0=禁用, 1=警告, 2=错误
     * - applicable: "always"=始终应用, "never"=永不应用
     * @see: https://commitlint.js.org/#/reference-rules
     */
    rules: {
        "body-leading-blank": [2, "always"], // body 内容必须以空行开头（错误级别）
        "footer-leading-blank": [1, "always"], // footer 内容必须以空行开头（警告级别）
        "header-max-length": [2, "always", 108], // header 最大长度为 108 字符（错误级别）
        "subject-empty": [2, "never"], // subject 不能为空（错误级别）
        "type-empty": [2, "never"], // type 不能为空（错误级别）
        "subject-case": [0], // 禁用 subject 大小写检查
        "type-enum": [
            // 定义允许的 commit type 枚举值
            2,
            "always",
            [
                "feat", // 新功能
                "fix", // 修复 bug
                "docs", // 文档变更
                "style", // 代码格式（不影响功能）
                "refactor", // 代码重构（不影响功能）
                "perf", // 性能优化
                "test", // 新增测试
                "build", // 构建变更
                "ci", // 持续集成变更
                "chore", // 其他变更
                "revert", // 回滚变更
                "wip", // 工作进行中
                "workflow", // 工作流变更
                "types", // 类型变更
                "release" // 发布变更
            ]
        ]
    },

    /**
     * cz-git 交互式提交配置
     * 提供友好的命令行交互体验
     */
    prompt: {
        // 交互提示消息（中文）
        messages: {
            type: "请选择提交类型:",
            scope: "请输入提交范围（可选）:",
            subject: "请输入提交描述:",
            body: "请输入提交详情（可选）:",
            footer: "请输入提交脚注（可选）:",
            confirmCommit: "确认提交？"
        },

        // 提交类型选项（显示名称）
        types: [
            { value: "feat", name: "feat: 新功能" },
            { value: "fix", name: "fix: 修复 bug" },
            { value: "docs", name: "docs: 文档变更" },
            { value: "style", name: "style: 代码格式（不影响功能）" },
            { value: "refactor", name: "refactor: 代码重构（不影响功能）" },
            { value: "perf", name: "perf: 性能优化" },
            { value: "test", name: "test: 新增测试" },
            { value: "build", name: "build: 构建变更" },
            { value: "ci", name: "ci: 持续集成变更" },
            { value: "chore", name: "chore: 其他变更" },
            { value: "revert", name: "revert: 回滚变更" },
            { value: "wip", name: "wip: 工作进行中" },
            { value: "workflow", name: "workflow: 工作流变更" },
            { value: "types", name: "types: 类型变更" },
            { value: "release", name: "release: 发布变更" },
            { value: "hotfix", name: "hotfix: 紧急修复" }
        ],

        // 预设的提交范围选项
        scopes: ["root", "backend", "frontend", "components", "utils"],

        // 是否允许自定义提交范围
        allowCustomScopes: true,

        // 跳过的交互问题（这些问题不会在交互中出现）
        skipQuestions: ["body", "footerPrefix", "footer", "breaking"]
    }
};
