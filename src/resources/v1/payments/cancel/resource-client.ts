import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/payments/cancel/request-types";

export class CancelClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * The payment will be voided if possible meaning the payment source will not be charged & the payment will never settle.
   * Otherwise, the payment will be refunded meaning the payment source will be charged & the payment will be refunded from deductions of future settlements.
   * Not all payments are eligible to be cancelled.
   *
   * A successful response does *not* mean the payment has been cancelled; it only means the cancellation request is successfully submitted.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1PaymentsIdCancelResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payments/${request.id}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
