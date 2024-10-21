import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";

export class BalancesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Retrieves the balance of merchant funds that have settled and also of funds that have been sent for processing but have not yet settled.
   */
  list(opts?: RequestOptions): ApiPromise<types.GetV1BalancesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/balances",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
