import { PLUGIN_PREFIX } from '../factory';
import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';
import type { TypedFlatConfigItem } from '../types';

export async function disables(): Promise<TypedFlatConfigItem[]> {
    return [
        {
            files: [`scripts/${GLOB_SRC}`],
            name: `${PLUGIN_PREFIX}/disables/scripts`,
            rules: {
                'no-console': 'off',
                'ts/explicit-function-return-type': 'off',
                'unicorn/consistent-function-scoping': 'off'
            }
        },
        {
            files: [`cli/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
            name: `${PLUGIN_PREFIX}/disables/cli`,
            rules: {
                'no-console': 'off'
            }
        },
        {
            files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
            name: `${PLUGIN_PREFIX}/disables/bin`,
            rules: {
                [`${PLUGIN_PREFIX}/no-import-dist`]: 'off',
                [`${PLUGIN_PREFIX}/no-import-node-modules-by-path`]: 'off'
            }
        },
        {
            files: ['**/*.d.?([cm])ts'],
            name: `${PLUGIN_PREFIX}/disables/dts`,
            rules: {
                'eslint-comments/no-unlimited-disable': 'off',
                'import/no-duplicates': 'off',
                'no-restricted-syntax': 'off',
                'unused-imports/no-unused-vars': 'off'
            }
        },
        {
            files: ['**/*.{test,spec}.([tj])s?(x)'],
            name: `${PLUGIN_PREFIX}/disables/test`,
            rules: {
                'no-unused-expressions': 'off'
            }
        },
        {
            files: ['**/*.js', '**/*.cjs'],
            name: `${PLUGIN_PREFIX}/disables/cjs`,
            rules: {
                'ts/no-require-imports': 'off'
            }
        }
    ];
}
