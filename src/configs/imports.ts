import { PLUGIN_PREFIX } from '../factory';
import type { OptionsStylistic, TypedFlatConfigItem } from '../types';
import { pluginImport } from '../plugins';
import { GLOB_SRC_EXT } from '../globs';

export async function imports(options: OptionsStylistic = {}): Promise<TypedFlatConfigItem[]> {
    const { stylistic = true } = options;

    return [
        {
            name: `${PLUGIN_PREFIX}/imports/rules`,
            plugins: {
                // antfu: pluginAntfu,
                import: pluginImport
            },
            rules: {
                // 'import-dedupe': 'error',
                // 'no-import-dist': 'error',
                // 'no-import-node-modules-by-path': 'error',

                'import/first': 'error',
                'import/no-duplicates': 'error',
                'import/no-mutable-exports': 'error',
                'import/no-named-default': 'error',
                'import/no-self-import': 'error',
                'import/no-webpack-loader-syntax': 'error',
                'import/order': 'error',

                ...(stylistic
                    ? {
                          'import/newline-after-import': ['error', { count: 1 }]
                      }
                    : {})
            }
        },
        {
            files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
            name: `${PLUGIN_PREFIX}/imports/disables/bin`,
            rules: {
                'no-import-dist': 'off',
                'no-import-node-modules-by-path': 'off'
            }
        }
    ];
}
