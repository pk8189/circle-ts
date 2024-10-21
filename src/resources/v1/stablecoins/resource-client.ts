import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";

export class StablecoinsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Retrieves total circulating supply for supported stablecoins across all chains. This endpoint is rate limited to one call per minute (based on IP).
   */
  list(opts?: RequestOptions): ApiPromise<types.GetV1StablecoinsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/stablecoins",
      responseType: "json",
      opts,
    });
  }
}
