const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.json';

const tsParser = [
    {
        parserOptions: {
            tsconfigRootDir: process.cwd(),
            project: [tsconfig]
        },
        parser: '@typescript-eslint/parser',
        excludedFiles: ['**/*.md/*.*'],
        files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
        rules: {
            'no-throw-literal': 'off',
            '@typescript-eslint/no-throw-literal': 'error',
            'no-implied-eval': 'off',
            '@typescript-eslint/no-implied-eval': 'error',
            'dot-notation': 'off',
            '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            'require-await': 'off',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/unbound-method': 'error'
        }
    },
    {
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        files: ['**/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
        plugins: ['jest'],
        rules: {
            // you should turn the original rule off *only* for test files
            '@typescript-eslint/unbound-method': 'off',
            'jest/unbound-method': 'error'
        }
    }
];

module.exports = {
    tsParser,
    tsconfig
};

