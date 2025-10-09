import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';
import { DEFAULT_OPTIONS } from '@jiangweiye/prettier-config/options';

import { interopDefault } from '../utils';

export const StylisticConfigDefaults: StylisticConfig = {
    indent: DEFAULT_OPTIONS.tabWidth,
    jsx: true,
    quotes: 'single',
    semi: DEFAULT_OPTIONS.semi
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
        indent,
        jsx,
        pluginName: 'style',
        quotes,
        semi
    }) as TypedFlatConfigItem;

    return [
        {
            name: 'jiangweiye/stylistic/rules',
            plugins: {
                style: pluginStylistic
            },
            rules: {
                ...config.rules,
                ...(lessOpinionated ? { curly: ['error', 'all'] } : { curly: ['error', 'multi-or-nest', 'consistent'] }),
                curly: ['off', 'multi'],
                'style/arrow-parens': ['error', 'as-needed'],
                'style/brace-style': 'error',
                'style/comma-dangle': ['off'],
                'style/indent': ['off'],
                'style/indent-binary-ops': 'off',
                'style/jsx-quotes': ['error', 'prefer-single'],
                'style/no-multiple-empty-lines': ['off'],
                'style/no-tabs': 'off',
                'style/operator-linebreak': 'off',
                'style/quote-props': ['error', 'as-needed'],
                ...overrides
            }
        }
    ];
}
