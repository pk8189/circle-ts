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
   * Retrieves the balance of funds that are available for use.
   */
  list(
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBalancesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/balances",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
