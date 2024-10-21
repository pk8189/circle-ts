import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";

export class PingClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Checks that the service is running.
   */
  list(opts?: RequestOptions): ApiPromise<types.Ping> {
    return this._client.makeRequest({
      method: "get",
      path: "/ping",
      responseType: "json",
      opts,
    });
  }
}
