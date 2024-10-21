import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/exchange/quotes/request-types";

export class QuotesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Fetches an indicative exchange rate between two currencies. Either the from currency or to currency must be USD.
   *
   * Note: The current market exchange rate will be applied when Circle receives the deposit.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1ExchangeQuotesResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/exchange/quotes",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
