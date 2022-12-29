const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');

module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            },
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                ...(TS ? { '@typescript-eslint/no-unused-vars': 'off' } : null)
            }
        }
    ],
    extends: ['plugin:vue/vue3-recommended', TS ? '@jiangweiye/eslint-config-ts' : '@jiangweiye/eslint-config-basic'],
    rules: {
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-child-content': 'error',
        'vue/no-computed-properties-in-data': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attributes': 'error',
        'vue/no-export-in-script-setup': 'error',
        'vue/no-mutating-props': 'error',
        'vue/no-parsing-error': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-reserved-component-names': [
            'error',
            {
                disallowVueBuiltInComponents: false,
                disallowVue3BuiltInComponents: false
            }
        ],
        'vue/no-reserved-keys': 'error',
        'vue/no-reserved-props': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': 'error',
        'vue/no-use-computed-property-like-method': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/no-useless-template-attributes': 'error',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/require-component-is': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/return-in-emits-validator': 'error',
        'vue/use-v-on-exact': 'error',
        'vue/valid-attribute-name': 'error',
        'vue/valid-define-emits': 'error',
        'vue/valid-define-props': 'error',
        'vue/valid-next-tick': 'error',
        'vue/valid-template-root': 'off',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',

        'vue/no-deprecated-data-object-declaration': 'error',
        'vue/no-deprecated-destroyed-lifecycle': 'off',
        'vue/no-deprecated-dollar-listeners-api': 'error',
        'vue/no-deprecated-dollar-scopedslots-api': 'error',
        'vue/no-deprecated-events-api': 'error',
        'vue/no-deprecated-filter': 'error',
        'vue/no-deprecated-functional-template': 'error',
        'vue/no-deprecated-html-element-is': 'error',
        'vue/no-deprecated-inline-template': 'error',
        'vue/no-deprecated-props-default-this': 'error',
        'vue/no-deprecated-router-link-tag-prop': [
            'error',
            {
                components: ['RouterLink']
            }
        ],
        'vue/no-deprecated-scope-attribute': 'error',
        'vue/no-deprecated-slot-attribute': 'error',
        'vue/no-deprecated-slot-scope-attribute': 'error',
        'vue/no-deprecated-v-bind-sync': 'error',
        'vue/no-deprecated-v-is': 'error',
        'vue/no-deprecated-v-on-native-modifier': 'error',
        'vue/no-deprecated-v-on-number-modifiers': 'error',
        'vue/no-deprecated-vue-config-keycodes': 'error',
        'vue/no-expose-after-await': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/no-watch-after-await': 'error',
        'vue/prefer-import-from-vue': 'error',
        'vue/require-slots-as-functions': 'error',
        'vue/require-toggle-inside-transition': 'error',
        'vue/valid-v-is': 'error',
        'vue/valid-v-memo': 'error',
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-for-template-key': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/valid-model-definition': 'error',
        'vue/valid-v-bind-sync': 'error',
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',

        // reactivity transform
        'vue/no-setup-props-destructure': 'off',

        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        'vue/block-tag-newline': [
            'error',
            {
                singleline: 'always',
                multiline: 'always'
            }
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': [
            'error',
            {
                order: ['defineProps', 'defineEmits']
            }
        ],
        'vue/html-comment-content-spacing': [
            'error',
            'always',
            {
                exceptions: ['-']
            }
        ],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': 'error',

        // extensions
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': ['error', { before: true, after: true }],
        'vue/block-spacing': ['error', 'always'],
        'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': ['error', { before: false, after: true }],
        'vue/comma-style': ['error', 'last'],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        // 'vue/func-call-spacing': ['off', 'never'],
        'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'vue/keyword-spacing': ['error', { before: true, after: true }],
        'vue/no-constant-condition': 'warn',
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': ['error', 'functions'],
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
        'vue/no-sparse-arrays': 'error',
        'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
        'vue/object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true
            }
        ],
        'vue/operator-linebreak': ['error', 'before'],
        'vue/prefer-template': 'error',
        'vue/quote-props': ['error', 'consistent-as-needed'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
        'vue/template-curly-spacing': 'error',

        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/order-in-components': [
            1,
            {
                order: [
                    'el',
                    'name',
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'data',
                    'model',
                    'props',
                    'emits',
                    'components',
                    'ROUTER_GUARDS',
                    'render',
                    'setup',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    'computed',
                    'watch',
                    'directives',
                    'filters'
                ]
            }
        ],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index']
            }
        ]
    }
};

