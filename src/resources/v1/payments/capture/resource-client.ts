import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/payments/capture/request-types";

export class CaptureClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Warning: Please contact Circle support if you are planning on using this feature.
   *
   * The given amount will be captured for the authorized payment if possible. If no amount is specified, the full amount
   * will be captured. You can only capture once per authorization.
   *
   * A successful response does *not* mean the payment has been captured. It only means the capture request was successfully submitted.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<null> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payments/${request.id}/capture`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
