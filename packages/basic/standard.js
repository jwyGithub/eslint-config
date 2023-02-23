module.exports = {
    parserOptions: {
        ecmaVersion: 2022,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    env: {
        es2021: true,
        node: true,
        es6: true
    },
    plugins: ['import', 'n', 'promise'],
    globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
    },
    /**
     * "off" or 0 - turn the rule off
     * "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
     * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
     */
    rules: {
        'no-extra-semi': 1,
        /**
         * 要求在数组方法的回调中使用 return 语句
         */
        'array-callback-return': 2,
        /**
         * Require super() calls in constructors
         */
        'constructor-super': 2,
        /**
         * 禁止无限 for 循环
         */
        'for-direction': 2,
        /**
         * 强制要求属性获取器中要有返回语句
         */
        'getter-return': 2,
        /**
         * 禁止异步 Promise 执行器函数
         */
        'no-async-promise-executor': 2,
        /**
         * 不允许在循环体中使用 await。
         */
        'no-await-in-loop': 2,
        /**
         * 标记修改类声明的变量
         */
        'no-class-assign': 2,
        /**
         * 禁止与-0比较
         */
        'no-compare-neg-zero': 2,
        /**
         * 禁用 if、for、while 和 do...while 测试条件中的模糊赋值运算符
         */
        'no-cond-assign': 2,
        /**
         * 禁止修改使用 const 关键字声明的变量
         */
        'no-const-assign': 2,
        /**
         *
         */
        'no-constant-binary-expression': 2,
        /**
         * 不允许在以下测试条件中使用常量表达式：
         * if、for、while 或 do...while 语句
         * ?: 三元表达式
         */
        'no-constant-condition': 2,
        /**
         * 在类的构造函数中，使用此规则禁用 return 语句
         */
        'no-constructor-return': 2,
        /**
         * 不允许使用控制字符和一些转义序列与正则表达式中的控制字符匹配
         */
        'no-control-regex': 2,
        /**
         * 此规则禁用 debugger 语句。
         */
        'no-debugger': 1,
        /**
         * 不允许在函数声明或表达式中出现重复的参数名
         */
        'no-dupe-args': 2,
        /**
         * 标记类成员中的重复名称的使用。
         */
        'no-dupe-class-members': 2,
        /**
         * 不允许在同一个 if-else-if 链中出现重复的条件。
         */
        'no-dupe-else-if': 2,
        /**
         * 不允许在对象字面中出现重复的键。
         */
        'no-dupe-keys': 2,
        /**
         * 禁止在 switch 的 case 子句中重复测试表达式。
         */
        'no-duplicate-case': 2,
        /**
         * 所有可以合并的单个模块的导入都在于一个 import 语句中。
         */
        'no-duplicate-imports': 0,
        /**
         * 不允许正则表达式中的空字符类。
         */
        'no-empty-character-class': 2,
        /**
         * 标记非结构化对象和数组中的任何空模式
         */
        'no-empty-pattern': 1,
        /**
         * 不允许在 catch 子句中重新分配异常。
         */
        'no-ex-assign': 2,
        /**
         * 消除无意中从一个子句突破到另一个子句
         */
        'no-fallthrough': 2,
        /**
         * 不允许重新分配 function 的声明。
         */
        'no-func-assign': 2,
        /**
         * 对导入的绑定的分配、增量和减量发出警告。
         */
        'no-import-assign': 2,
        /**
         * 要求函数声明和可选的变量声明必须在程序的根部，或在函数主体的根部，或在类静态块的主体根部。
         */
        'no-inner-declarations': 2,
        /**
         * 不允许在 RegExp 构造函数中使用无效的正则表达式字符串。
         */
        'no-invalid-regexp': 2,
        /**
         * 目的是捕捉非正常制表符和空格的无效空白
         */
        'no-irregular-whitespace': [2, { skipComments: true, skipTemplates: true }],
        /**
         * 不允许使用在运行时由于 64 位浮点四舍五入而在转换为 JS Number 时失去精度的数字字面。
         */
        'no-loss-of-precision': 2,
        /**
         * 在字符类语法中包含多个码位字符的正则表达式。
         */
        'no-misleading-character-class': 2,
        /**
         *
         */
        'no-new-native-nonconstructor': 2,
        /**
         * 禁止用 new 运算符意外地调用 Symbol。
         */
        'no-new-symbol': 2,
        /**
         * 不允许将 Math、JSON、Reflect 和 Atomics 对象作为函数调用。
         */
        'no-obj-calls': 2,
        /**
         * 不允许从 Promise 执行器函数中返回值。
         */
        'no-promise-executor-return': 2,
        /**
         * 不允许在对象实例上直接调用一些 Object.prototype 方法。
         */
        'no-prototype-builtins': 1,
        /**
         * 禁止自我赋值
         */
        'no-self-assign': 2,
        /**
         * 禁止自己与自己比较
         */
        'no-self-compare': 2,
        /**
         * 禁用从 setter 返回值，并在 setter 函数中报告return 语句。
         */
        'no-setter-return': 2,
        /**
         * 不允许稀疏数组字面有“holes”，即逗号不在元素之前。它不适用于最后一个元素后面的尾部逗号。
         */
        'no-sparse-arrays': 1,
        /**
         * 当一个普通的字符串包含看起来像模板字面的占位符时发出警告
         */
        'no-template-curly-in-string': 1,
        /**
         * 在调用 super() 之前标记 this/super 关键字。
         */
        'no-this-before-super': 2,
        /**
         * 不允许对只读的全局变量进行赋值
         */
        'no-undef': [2, { typeof: true }],
        /**
         * 不允许出现混乱的多行表达式，即换行看起来像是在结束一个语句，但实际上不是。
         */
        'no-unexpected-multiline': 1,
        /**
         *
         */
        'no-unmodified-loop-condition': 1,
        /**
         * 禁用 return、throw、continue 和 break 后的不可达代码
         */
        'no-unreachable': 1,
        'no-unreachable-loop': 2,
        /**
         * 禁用 return, throw, break, 和 continue 语句。在 finally 块内。它允许间接使用，例如在 function 或 class 定义中。
         */
        'no-unsafe-finally': 2,
        /**
         * 不允许否定以下关系运算符的左边操作数
         * in 运算符.
         * instanceof 运算符.
         */
        'no-unsafe-negation': 2,
        /**
         * 检测一些使用可选链的情况
         */
        'no-unsafe-optional-chaining': 2,
        /**
         * 禁止未使用的私有类成员
         */
        'no-unused-private-class-members': 2,
        /**
         * Disallow unused variables
         */
        'no-unused-vars': 1,
        /**
         * 在定义变量之前禁止使用变量
         */
        'no-use-before-define': [2, { functions: false, classes: false, variables: true }],

        /**
         * 禁止在正则表达式中无用的反向引用
         */
        'no-useless-backreference': 2,
        /**
         * Disallow assignments that can lead to race conditions due to usage of await or yield
         */
        'require-atomic-updates': 2,
        /**
         * 不允许与 NaN 进行比较。
         */
        'use-isnan': 2,
        /**
         * 强制将表达式与有效字符串进行比较
         */
        'valid-typeof': 2,

        // Suggestions
        /**
         * Enforce getter and setter pairs in objects and classes
         */
        'accessor-pairs': 2,
        /**
         * Require braces around arrow function bodies
         */
        'arrow-body-style': 0,
        /**
         * Enforce the use of variables within the scope they are defined
         */
        'block-scoped-var': 2,
        /**
         * Enforce a maximum cyclomatic complexity allowed in a program
         */
        complexity: [2, 10],
        /**
         * Require return statements to either always or never specify values
         */
        'consistent-return': 1,
        /**
         * Enforce consistent naming when capturing the current execution context
         */
        'consistent-this': [2, '_this'],
        /**
         * Enforce consistent brace style for all control statements
         */
        curly: [2, 'multi-line'],
        /**
         * Require default cases in switch statements
         */
        'default-case': 2,
        /**
         * Enforce default clauses in switch statements to be last
         */
        'default-case-last': 2,
        /**
         * 将默认参数放在最后，允许函数调用省略可选的尾部参数。
         */
        'default-param-last': 1,
        /**
         * Require the use of === and !==
         */
        eqeqeq: [2, 'smart'],
        'func-name-matching': 2,
        /**
         * Require grouped accessor pairs in object literals and classes
         */
        'grouped-accessor-pairs': 2,
        /**
         * Require for-in loops to include an if statement
         */
        'guard-for-in': 1,
        /**
         * Disallow specified identifiers
         */
        'id-denylist': [1, 'err', 'e', 'cb', 'callback'],
        /**
         * Enforce minimum and maximum identifier lengths
         */
        'id-length': 0,
        /**
         * Require or disallow initialization in variable declarations
         */
        'init-declarations': [1, 'always'],
        /**
         * Enforce a maximum number of classes per file
         */
        'max-classes-per-file': [1, { ignoreExpressions: true, max: 5 }],
        /**
         * Enforce a maximum depth that blocks can be nested
         */
        'max-depth': [1, 5],
        /**
         * 文件最大行数
         */
        'max-lines': [1, { max: 3000, skipComments: true, skipBlankLines: true }],
        /**
         * 函数代码最大行数
         */
        'max-lines-per-function': [1, { max: 200, skipBlankLines: true, skipComments: true }],
        /**
         * 回调可以嵌套的最大深度，以提高代码的清晰度。
         */
        'max-nested-callbacks': [1, { max: 3 }],
        /**
         * 函数定义中允许的最大参数数。
         */
        'max-params': [1, { max: 5 }],
        /**
         * 注释风格
         */
        'multiline-comment-style': [1, 'separate-lines'],
        /**
         * Require constructor names to begin with a capital letter
         */
        'new-cap': [0, { capIsNewExceptionPattern: '^Toast' }],
        /**
         * Disallow the use of alert, confirm, and prompt
         */
        'no-alert': 1,
        /**
         * 不允许 Array 构造函数。
         */
        'no-array-constructor': 2,
        /**
         * Disallow the use of arguments.caller or arguments.callee
         */
        'no-caller': 2,
        /**
         * Disallow arrow functions where they could be confused with comparisons
         */
        'no-confusing-arrow': 2,
        /**
         * Disallow the use of console
         */
        'no-console': 1,
        /**
         * Disallow deleting variables
         */
        'no-delete-var': 2,
        /**
         * Disallow division operators explicitly at the beginning of regular expressions
         */
        'no-div-regex': 2,
        /**
         * Disallow empty block statements
         */
        'no-empty': 2,
        /**
         * Disallow empty functions
         */
        'no-empty-function': [2, { allow: ['functions', 'arrowFunctions'] }],
        /**
         * Disallow empty static blocks
         */
        'no-empty-static-block': 2,
        /**
         * Disallow null comparisons without type-checking operators
         */
        'no-eq-null': 2,
        /**
         * Disallow the use of eval()
         */
        'no-eval': 2,
        /**
         * Disallow extending native types
         */
        'no-extend-native': 2,
        /**
         * Require let or const instead of var
         */
        'no-var': 2,

        'no-extra-bind': 2,
        'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
        'no-extra-label': 'error',
        'no-floating-decimal': 1,
        'no-global-assign': 2,
        'no-implicit-coercion': 0,
        'no-implicit-globals': 0,
        'no-implied-eval': 2,
        'no-inline-comments': 1,
        'no-invalid-this': 'error',
        'no-iterator': 2,
        'no-label-var': 1,
        'no-labels': ['error', { allowLoop: true }],
        'no-lone-blocks': 'error',
        'no-lonely-if': 1,
        'no-loop-func': 'error',
        'no-magic-numbers': 0,
        'no-mixed-operators': 0,
        'no-multi-assign': 1,
        'no-multi-str': 0,
        'no-negated-condition': 0,
        'no-nested-ternary': 2,
        'no-new': 0,
        'no-new-func': 'error',
        'no-new-object': 2,
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 2,
        'no-octal': 'error',
        'no-octal-escape': 'error',

        // Layout & Formatting
        'array-bracket-newline': [1, 'consistent'],
        'array-bracket-spacing': [1, 'never', { singleValue: false }],
        'array-element-newline': [1, 'consistent'],
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': 1,
        'block-spacing': [1, 'always'],
        'brace-style': 1,
        'comma-dangle': [1, 'never'],
        'comma-spacing': [1, { before: false, after: true }],
        'comma-style': [1, 'last'],
        'computed-property-spacing': [1, 'never', { enforceForClassMembers: true }],
        'dot-location': [1, 'property'],
        'eol-last': 0,
        'func-call-spacing': [2, 'never'],
        'function-call-argument-newline': [2, 'consistent'],
        'function-paren-newline': [1, 'consistent'],
        'generator-star-spacing': [1, { before: false, after: true }],
        'implicit-arrow-linebreak': ['error', 'beside'],
        indent: [1, 4],
        'jsx-quotes': [1, 'prefer-double'],
        'key-spacing': [1, { beforeColon: false }],
        'line-comment-position': [1, { position: 'above' }],
        'lines-between-class-members': [1, 'always'],
        'max-len': 0,
        'max-statements-per-line': [1, { max: 2 }],
        'multiline-ternary': [1, 'always-multiline'],
        'new-parens': 'error',
        'newline-per-chained-call': [1, { ignoreChainWithDepth: 4 }],
        'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
        'no-multi-spaces': 1,
        'no-tabs': 0,
        'no-trailing-spaces': 1,
        'no-whitespace-before-property': 'error',
        'object-curly-newline': [1, { consistent: true }],
        'object-curly-spacing': [1, 'always'],
        'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
        'operator-linebreak': 0,
        'padded-blocks': [1, 'never'],
        quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'rest-spread-spacing': ['error', 'never'],
        semi: ['error', 'always'],
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        'space-before-blocks': 1,
        'space-before-function-paren': 1,
        'space-in-parens': [1, 'never'],
        'space-infix-ops': 1,
        'wrap-iife': ['error', 'outside'],
        'yield-star-spacing': ['error', 'before']
    }
};

