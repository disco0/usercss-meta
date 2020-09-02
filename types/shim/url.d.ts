export var URL: {
    new (url: string, base?: string | URL): URL;
    prototype: URL;
    createObjectURL(object: any): string;
    revokeObjectURL(url: string): void;
};
