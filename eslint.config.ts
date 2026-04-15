import { eslint } from '@jawyn/eslint-config';

export default eslint(
    {
        vue: true,
        react: true,
        solid: true,
        svelte: true,
        astro: true,
        typescript: true,
        formatters: true,
        pnpm: true,
        stylistic: true
    },
    {
        rules: {
            'pnpm/json-prefer-workspace-settings': 'off'
        }
    },
    {
        ignores: ['fixtures', '_fixtures']
    }
);
