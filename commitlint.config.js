/** @type {import('cz-git').UserConfig} */
export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
        "body-leading-blank": [2, "always"],
        "footer-leading-blank": [1, "always"],
        "header-max-length": [2, "always", 108],
        "subject-empty": [2, "never"],
        "type-empty": [2, "never"],
        "subject-case": [0],
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "perf",
                "test",
                "build",
                "ci",
                "chore",
                "revert",
                "wip",
                "workflow",
                "types",
                "release"
            ]
        ]
    },
    prompt: {
        messages: {
            type: "请选择提交类型:",
            scope: "请输入提交范围（可选）:",
            subject: "请输入提交描述:",
            body: "请输入提交详情（可选）:",
            footer: "请输入提交脚注（可选）:",
            confirmCommit: "确认提交？"
        },
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
        scopes: ["root", "backend", "frontend", "components", "utils"],
        allowCustomScopes: true,
        skipQuestions: ["body", "footerPrefix", "footer", "breaking"]
    }
};
