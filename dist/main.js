"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Request = require("request-promise-native");
class BWAPIWrapper {
    constructor(options) {
        this.BASE_URL = "https://api.bastionbot.org";
        this.OPTIONS = {
            json: true,
        };
        if (options && typeof options === "object") {
            Object.assign(this.OPTIONS, options);
        }
    }
    request(path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.BASE_URL + path;
            let requestOptions = Object.assign({}, this.OPTIONS);
            if (options && typeof options === "object") {
                Object.assign(requestOptions, options);
            }
            return yield Request(url, requestOptions);
        });
    }
}
module.exports = BWAPIWrapper;
//# sourceMappingURL=main.js.map