"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require("request-promise-native");
class BWAPIWrapper {
    constructor(headers) {
        this.BASE_URL = "https://api.bastionbot.org";
        this.HEADERS = {};
        if (headers && typeof headers === "object") {
            Object.assign(this.HEADERS, headers);
        }
    }
    request(path, qs) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.BASE_URL + path;
            let options = {
                headers: this.HEADERS,
                json: true,
                qs,
            };
            return yield request(url, options);
        });
    }
}
module.exports = BWAPIWrapper;
//# sourceMappingURL=main.js.map