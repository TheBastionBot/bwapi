import * as request from "request-promise-native";
declare class BWAPIWrapper {
    private BASE_URL;
    private OPTIONS;
    constructor(options?: request.RequestPromiseOptions);
    request(path: string, options?: request.RequestPromiseOptions): Promise<any>;
}
export = BWAPIWrapper;
//# sourceMappingURL=main.d.ts.map