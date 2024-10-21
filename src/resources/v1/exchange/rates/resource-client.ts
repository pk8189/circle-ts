import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/exchange/rates/request-types";

export class RatesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Fetch the current rates for the specified trading pair. The trading pair is defined by a base currency followed by a quote currency. The response contains buy and sell rates denominated in the quote currency. **Exchange rate is an estimate only and is subject to change by the time you submit the actual request.**
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1ExchangeRatesTradingPairResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/exchange/rates/${request.tradingPair}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
