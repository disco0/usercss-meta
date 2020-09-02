export function createParser({ unknownKey, mandatoryKeys, parseKey: userParseKey, parseVar: userParseVar, validateKey: userValidateKey, validateVar: userValidateVar, allowErrors }?: {
    unknownKey?: string;
    mandatoryKeys?: string[];
    parseKey: any;
    parseVar: any;
    validateKey: any;
    validateVar: any;
    allowErrors?: boolean;
}): {
    parse: (text: any) => {
        metadata: {
            preprocessor: string;
        };
        errors: any[];
    };
    validateVar: (varObj: any) => void;
};
export declare function parse(text: any, options: any): {
    metadata: {
        preprocessor: string;
    };
    errors: any[];
};
export declare function parse(text: any, options: any): {
    metadata: {
        preprocessor: string;
    };
    errors: any[];
};
