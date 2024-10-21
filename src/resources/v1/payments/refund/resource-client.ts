import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/payments/refund/request-types";

export class RefundClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * The payment source will be refunded if possible. Not all payments are eligible to be cancelled.
   *
   * A successful response does *not* mean the payment has been refunded; it only means the refund request is successfully submitted.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1PaymentsIdRefundResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payments/${request.id}/refund`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
