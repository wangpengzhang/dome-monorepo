// 项目的统一prettier配置

/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
    // 一行最多显示的字符数，超过会自动换行
    printWidth: 120,

    // 缩进的空格数
    tabWidth: 4,

    // 是否使用制表符进行缩进
    useTabs: false,

    // 是否在语句末尾添加分号
    semi: true,

    // 是否使用单引号
    singleQuote: false,

    // 对象属性名是否使用引号，'as-needed'表示仅在需要时使用
    quoteProps: "as-needed",

    // JSX中是否使用单引号
    jsxSingleQuote: false,

    // 是否使用尾随逗号，'none'表示不使用
    trailingComma: "none",

    // 对象括号之间是否添加空格，如 { foo: bar }
    bracketSpacing: true,

    // 是否将多行元素的右括号放在最后一行的末尾，而不是新的一行
    bracketSameLine: false,

    // 箭头函数参数是否使用括号，'avoid'表示尽可能避免使用
    arrowParens: "avoid",

    // 是否要求文件顶部有格式化标记才应用格式化
    requirePragma: false,

    // 是否在格式化后的文件顶部插入格式化标记
    insertPragma: false,

    // 如何处理Markdown文本中的换行，'preserve'表示保留原始换行
    proseWrap: "preserve",

    // HTML空白敏感度，'css'表示根据CSS规则处理空白
    htmlWhitespaceSensitivity: "css",

    // 是否缩进Vue文件中的<script>和<style>标签内容
    vueIndentScriptAndStyle: false,

    // 行尾序列，'auto'表示根据操作系统自动确定
    endOfLine: "auto",

    // 格式化的起始范围
    rangeStart: 0,

    // 格式化的结束范围
    rangeEnd: Infinity
};
