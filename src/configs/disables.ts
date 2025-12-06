import type { TypedFlatConfigItem } from '../types';

import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';

export async function disables(): Promise<TypedFlatConfigItem[]> {
    return [
        {
            files: [`**/scripts/${GLOB_SRC}`],
            name: 'janone/disables/scripts',
            rules: {
                'janone/no-top-level-await': 'off',
                'no-console': 'off',
                'ts/explicit-function-return-type': 'off'
            }
        },
        {
            files: [`**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
            name: 'janone/disables/cli',
            rules: {
                'janone/no-top-level-await': 'off',
                'no-console': 'off'
            }
        },
        {
            files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
            name: 'janone/disables/bin',
            rules: {
                'janone/no-import-dist': 'off',
                'janone/no-import-node-modules-by-path': 'off'
            }
        },
        {
            files: ['**/*.d.?([cm])ts'],
            name: 'janone/disables/dts',
            rules: {
                'eslint-comments/no-unlimited-disable': 'off',
                'no-restricted-syntax': 'off',
                'unused-imports/no-unused-vars': 'off'
            }
        },
        {
            files: ['**/*.js', '**/*.cjs'],
            name: 'janone/disables/cjs',
            rules: {
                'ts/no-require-imports': 'off'
            }
        },
        {
            files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
            name: 'janone/disables/config-files',
            rules: {
                'janone/no-top-level-await': 'off',
                'no-console': 'off',
                'ts/explicit-function-return-type': 'off'
            }
        }
    ];
}
