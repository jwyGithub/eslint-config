import type { TypedFlatConfigItem } from '../types';

import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';

export async function disables(): Promise<TypedFlatConfigItem[]> {
    return [
        {
            files: [`**/scripts/${GLOB_SRC}`],
            name: 'jiangweiye/disables/scripts',
            rules: {
                'no-console': 'off',
                'ts/explicit-function-return-type': 'off'
            }
        },
        {
            files: [`**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
            name: 'jiangweiye/disables/cli',
            rules: {
                'no-console': 'off'
            }
        },
        {
            files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
            name: 'jiangweiye/disables/bin',
            rules: {
                'jiangweiye/no-import-dist': 'off',
                'jiangweiye/no-import-node-modules-by-path': 'off'
            }
        },
        {
            files: ['**/*.d.?([cm])ts'],
            name: 'jiangweiye/disables/dts',
            rules: {
                'eslint-comments/no-unlimited-disable': 'off',
                'import/no-duplicates': 'off',
                'no-restricted-syntax': 'off',
                'unused-imports/no-unused-vars': 'off'
            }
        },
        {
            files: ['**/*.js', '**/*.cjs'],
            name: 'jiangweiye/disables/cjs',
            rules: {
                'ts/no-require-imports': 'off'
            }
        },
        {
            files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
            name: 'jiangweiye/disables/config-files',
            rules: {
                'no-console': 'off',
                'ts/explicit-function-return-type': 'off'
            }
        }
    ];
}
