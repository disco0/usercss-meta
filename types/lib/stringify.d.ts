export function createStringifier({ alignKeys, space, format, stringifyKey: userStringifyKey, stringifyVar: userStringifyVar }?: {
    alignKeys?: boolean;
    space?: number;
    format?: string;
    stringifyKey?: {};
    stringifyVar?: {};
}): {
    stringify: (meta: any) => string;
};
export declare function stringify(meta: any, options: any): string;
export declare function stringify(meta: any, options: any): string;
