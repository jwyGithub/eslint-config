module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        es6: true
    },
    reportUnusedDisableDirectives: true,
    extends: [
        './standard',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:yml/standard',
        'plugin:markdown/recommended'
    ],
    ignorePatterns: [
        '*.min.*',
        '*.d.ts',
        'CHANGELOG.md',
        'dist',
        'LICENSE*',
        'output',
        'out',
        'coverage',
        'public',
        'temp',
        'package-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
        '__snapshots__',
        '!.github',
        '!.vitepress',
        '!.vscode'
    ],
    plugins: ['html', 'unicorn', 'no-only-tests'],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs'] }
        }
    },
    overrides: [
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/array-bracket-spacing': ['error', 'never'],
                'jsonc/comma-dangle': ['error', 'never'],
                'jsonc/comma-style': ['error', 'last'],
                'jsonc/indent': ['error', 4],
                'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
                'jsonc/no-octal-escape': 'error',
                'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
                'jsonc/object-curly-spacing': ['error', 'always'],
                'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }]
            }
        },
        {
            files: ['*.yaml', '*.yml'],
            parser: 'yaml-eslint-parser',
            rules: {
                'spaced-comment': 'off'
            }
        },
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                    {
                        pathPattern: '^$',
                        order: [
                            'publisher',
                            'name',
                            'displayName',
                            'type',
                            'version',
                            'private',
                            'packageManager',
                            'description',
                            'author',
                            'license',
                            'funding',
                            'homepage',
                            'repository',
                            'bugs',
                            'keywords',
                            'categories',
                            'sideEffects',
                            'exports',
                            'main',
                            'module',
                            'unpkg',
                            'jsdelivr',
                            'types',
                            'typesVersions',
                            'bin',
                            'icon',
                            'files',
                            'engines',
                            'activationEvents',
                            'contributes',
                            'scripts',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'dependencies',
                            'optionalDependencies',
                            'devDependencies',
                            'pnpm',
                            'overrides',
                            'resolutions',
                            'husky',
                            'simple-git-hooks',
                            'lint-staged',
                            'eslintConfig'
                        ]
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' }
                    },
                    {
                        pathPattern: '^exports.*$',
                        order: ['types', 'require', 'import']
                    }
                ]
            }
        },
        {
            files: ['*.d.ts'],
            rules: {
                'import/no-duplicates': 'off'
            }
        },
        {
            files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
            rules: {
                'no-void': ['error', { allowAsStatement: true }]
            }
        },
        {
            files: ['scripts/**/*.*', 'cli.*'],
            rules: {
                'no-console': 'off'
            }
        },
        {
            files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
            rules: {
                'no-unused-expressions': 'off',
                'no-only-tests/no-only-tests': 'error'
            }
        }
    ],
    rules: {
        // import
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        'unicorn/error-message': 'error',
        // Uppercase regex escapes
        'unicorn/escape-case': 'error',
        // Array.isArray instead of instanceof
        'unicorn/no-instanceof-array': 'error',
        // Prevent deprecated `new Buffer()`
        'unicorn/no-new-buffer': 'error',
        // Keep regex literals safe!
        'unicorn/no-unsafe-regex': 'off',
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        'unicorn/number-literal-case': 'error',
        // includes over indexOf when checking for existence
        'unicorn/prefer-includes': 'error',
        // String methods startsWith/endsWith instead of more complicated stuff
        'unicorn/prefer-string-starts-ends-with': 'error',
        // textContent instead of innerText
        'unicorn/prefer-text-content': 'error',
        // Enforce throwing type error when throwing error while checking typeof
        'unicorn/prefer-type-error': 'error',
        // Use new when throwing error
        'unicorn/throw-new-error': 'error',

        'eslint-comments/disable-enable-pair': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/namespace': 'off',
        'n/no-callback-literal': 'off',

        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false
            }
        ],

        // yml
        'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
        'yml/no-empty-document': 'off',
        'yml/indent': 'off'
    }
};

