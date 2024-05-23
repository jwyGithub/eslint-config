import createCommand from 'eslint-plugin-command/config';
import type { TypedFlatConfigItem } from '../types';
import { PLUGIN_PREFIX } from '../factory';

export async function command(): Promise<TypedFlatConfigItem[]> {
    return [
        {
            ...createCommand(),
            name: `${PLUGIN_PREFIX}/command/rules`
        }
    ];
}
