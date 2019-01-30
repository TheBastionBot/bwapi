import * as Request from "request-promise-native";
declare class BWAPIWrapper {
    private BASE_URL;
    private OPTIONS;
    constructor(options?: Request.RequestPromiseOptions);
    request(path: string, options?: Request.RequestPromiseOptions): Promise<any>;
}
export = BWAPIWrapper;
//# sourceMappingURL=main.d.ts.map