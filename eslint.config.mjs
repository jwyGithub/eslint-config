import { eslint } from '@janone/eslint-config';

export default eslint(
    {
        vue: true,
        react: true,
        solid: true,
        svelte: true,
        astro: true,
        typescript: true,
        formatters: true,
        pnpm: true
    },
    {
        ignores: ['fixtures', '_fixtures']
    }
);
