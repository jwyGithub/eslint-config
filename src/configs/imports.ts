import { PLUGIN_PREFIX } from '../factory';
import type { OptionsStylistic, TypedFlatConfigItem } from '../types';
import { pluginImport } from '../plugins';

export async function imports(options: OptionsStylistic = {}): Promise<TypedFlatConfigItem[]> {
    const { stylistic = true } = options;

    return [
        {
            name: `${PLUGIN_PREFIX}/imports/rules`,
            plugins: {
                import: pluginImport
            },
            rules: {
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
        }
    ];
}
