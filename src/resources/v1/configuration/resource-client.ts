import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";

export class ConfigurationClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Retrieves general configuration information.
   */
  list(opts?: RequestOptions): ApiPromise<types.GetV1ConfigurationResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/configuration",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
