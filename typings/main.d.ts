declare class BWAPIWrapper {
    private BASE_URL;
    private HEADERS;
    constructor(headers?: object);
    request(path: string, qs?: object): Promise<any>;
}
export = BWAPIWrapper;
//# sourceMappingURL=main.d.ts.map