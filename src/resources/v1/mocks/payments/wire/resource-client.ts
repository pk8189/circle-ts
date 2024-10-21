import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/mocks/payments/wire/request-types";

export class WireClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * In the sandbox environment, initiate a mock wire payment that mimics the behavior of funds sent through the bank (wire) account linked to master wallet.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1MocksPaymentsWireResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/mocks/payments/wire",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
