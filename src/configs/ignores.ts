import type { TypedFlatConfigItem } from '../types';
import { GLOB_EXCLUDE } from '../globs';
import { PLUGIN_PREFIX } from '../factory';

export async function ignores(userIgnores: string[] = []): Promise<TypedFlatConfigItem[]> {
    return [
        {
            ignores: [...GLOB_EXCLUDE, ...userIgnores],
            name: `${PLUGIN_PREFIX}/ignores`
        }
    ];
}
