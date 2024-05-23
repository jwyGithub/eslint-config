import { PLUGIN_PREFIX } from '../factory';
import { interopDefault } from '../utils';
import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';
// import { pluginAntfu } from '../plugins';

export const StylisticConfigDefaults: StylisticConfig = {
    indent: 4,
    jsx: true,
    quotes: 'single',
    semi: true
};

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
    lessOpinionated?: boolean;
}

export async function stylistic(options: StylisticOptions = {}): Promise<TypedFlatConfigItem[]> {
    const {
        indent,
        jsx,
        lessOpinionated = false,
        overrides = {},
        quotes,
        semi
    } = {
        ...StylisticConfigDefaults,
        ...options
    };

    const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

    const config = pluginStylistic.configs.customize({
        flat: true,
        indent,
        jsx,
        pluginName: 'style',
        quotes,
        semi
    });

    return [
        {
            name: `${PLUGIN_PREFIX}/stylistic/rules`,
            plugins: {
                // antfu: pluginAntfu,
                style: pluginStylistic
            },
            rules: {
                ...config.rules,
                ...(lessOpinionated ? { curly: ['error', 'all'] } : { curly: ['error', 'multi-or-nest', 'consistent'] }),
                'style/indent': ['off'],
                'style/no-multiple-empty-lines': ['off'],
                'style/arrow-parens': ['error', 'as-needed'],
                'style/comma-dangle': ['off'],
                'style/quote-props': ['error', 'as-needed'],
                'style/operator-linebreak': 'off',
                'style/brace-style': 'error',
                ...overrides
            }
        }
    ];
}
