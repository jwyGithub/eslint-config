import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';
import { interopDefault } from '../utils';

export const StylisticConfigDefaults: StylisticConfig = {
    experimental: false,
    indent: 4,
    jsx: true,
    quotes: 'single',
    semi: true,
    commaDangle: 'never',
    quoteProps: 'as-needed',
    braceStyle: '1tbs'
};

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
    lessOpinionated?: boolean;
}

export async function stylistic(options: StylisticOptions = {}): Promise<TypedFlatConfigItem[]> {
    const {
        experimental,
        indent,
        jsx,
        lessOpinionated = false,
        overrides = {},
        quotes,
        semi,
        commaDangle,
        quoteProps,
        braceStyle
    } = {
        ...StylisticConfigDefaults,
        ...options
    };

    const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

    const config = pluginStylistic.configs.customize({
        experimental,
        indent,
        jsx,
        pluginName: 'style',
        quotes,
        semi,
        commaDangle,
        quoteProps,
        braceStyle
    }) as TypedFlatConfigItem;

    return [
        {
            name: 'jawyn/stylistic/rules',
            plugins: {
                style: pluginStylistic
            },
            rules: {
                ...config.rules,

                ...(lessOpinionated
                    ? {
                          curly: ['error', 'all']
                      }
                    : {}),

                'style/comma-dangle': ['error', commaDangle],
                'style/indent': ['off'],
                'style/arrow-parens': 'off',
                'style/operator-linebreak': 'off',
                'style/generator-star-spacing': ['error', { after: true, before: false }],
                'style/yield-star-spacing': ['error', { after: true, before: false }],

                ...overrides
            }
        }
    ];
}
