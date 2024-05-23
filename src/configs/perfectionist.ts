import type { TypedFlatConfigItem } from '../types';
import { pluginPerfectionist } from '../plugins';
import { PLUGIN_PREFIX } from '../factory';

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export async function perfectionist(): Promise<TypedFlatConfigItem[]> {
    return [
        {
            name: `${PLUGIN_PREFIX}/perfectionist/setup`,
            plugins: {
                perfectionist: pluginPerfectionist
            }
        }
    ];
}
