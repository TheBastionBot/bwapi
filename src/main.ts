import * as request from "request-promise-native";

class BWAPIWrapper {
  private BASE_URL: string = "https://api.bastionbot.org";
  private OPTIONS: request.RequestPromiseOptions = {
    json: true,
  };

  constructor(options?: request.RequestPromiseOptions) {
    if (options && typeof options === "object") {
      Object.assign(this.OPTIONS, options);
    }
  }

  public async request(path: string, options?: request.RequestPromiseOptions) {
    let url: string = this.BASE_URL + path;
    let requestOptions = this.OPTIONS;

    if (options && typeof options === "object") {
      Object.assign(requestOptions, options);
    }

    return await request(url, requestOptions);
  }
}

export = BWAPIWrapper;
