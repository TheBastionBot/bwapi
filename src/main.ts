import * as request from "request-promise-native";

class BWAPIWrapper {
  private BASE_URL: string = "https://api.bastionbot.org";
  private HEADERS: object = {};

  constructor(headers?: object) {
    if (headers && typeof headers === "object") {
      Object.assign(this.HEADERS, headers);
    }
  }

  public async request(path: string, qs?: object) {
    let url: string = this.BASE_URL + path;
    let options = {
      headers: this.HEADERS,
      json: true,
      qs,
    };

    return await request(url, options);
  }
}

export = BWAPIWrapper;
