import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/mocks/cards/chargebacks/request-types";

export class ChargebacksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * In the sandbox environment, initiate a mock chargeback of a specified payment.  The entire payment will be charged back for its full value.  The payment must be in the `paid` state (otherwise the endpoint will return a `404`), and each payment can only be charged back once (otherwise the endpoint will return a `409`).  This endpoint is only available in the sandbox environment.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1MocksCardsChargebacksResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/mocks/cards/chargebacks",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
