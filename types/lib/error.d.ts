export class ParseError extends Error {
    constructor(err: any);
}
export class MissingCharError extends ParseError {
    constructor(chars: any, index: any);
}
export class EOFError extends ParseError {
    constructor(index: any);
}
