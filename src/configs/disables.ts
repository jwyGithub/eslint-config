import type { TypedFlatConfigItem } from '../types';

import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';

export async function disables(): Promise<TypedFlatConfigItem[]> {
    return [
        {
            files: [`**/scripts/${GLOB_SRC}`],
            name: 'jawyn/disables/scripts',
            rules: {
                'jawyn/no-top-level-await': 'off',
                'no-console': 'off',
                'ts/explicit-function-return-type': 'off'
            }
        },
        {
            files: [`**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
            name: 'jawyn/disables/cli',
            rules: {
                'jawyn/no-top-level-await': 'off',
                'no-console': 'off'
            }
        },
        {
            files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
            name: 'jawyn/disables/bin',
            rules: {
                'jawyn/no-import-dist': 'off',
                'jawyn/no-import-node-modules-by-path': 'off'
            }
        },
        {
            files: ['**/*.d.?([cm])ts'],
            name: 'jawyn/disables/dts',
            rules: {
                'eslint-comments/no-unlimited-disable': 'off',
                'no-restricted-syntax': 'off',
                'unused-imports/no-unused-vars': 'off'
            }
        },
        {
            files: ['**/*.js', '**/*.cjs'],
            name: 'jawyn/disables/cjs',
            rules: {
                'ts/no-require-imports': 'off'
            }
        },
        {
            files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
            name: 'jawyn/disables/config-files',
            rules: {
                'jawyn/no-top-level-await': 'off',
                'no-console': 'off',
                'ts/explicit-function-return-type': 'off'
            }
        }
    ];
}
