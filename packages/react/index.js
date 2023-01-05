const { isPackageExists } = require('local-pkg');
const TS = isPackageExists('typescript');

module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        TS ? '@jiangweiye/eslint-config-ts' : '@jiangweiye/eslint-config-basic'
    ],
    settings: {
        react: {
            version: '17.0'
        }
    },
    rules: {
        'jsx-quotes': ['error', 'prefer-single'],
        'react/react-in-jsx-scope': 'off'
    }
};

