import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import { ExpireClient } from "@circle/all_apis/resources/v1/payment-intents/expire";
import { RefundClient } from "@circle/all_apis/resources/v1/payment-intents/refund";
import * as requests from "@circle/all_apis/resources/v1/payment-intents/request-types";
import qs from "qs";

export class PaymentIntentsClient extends CoreResourceClient {
  expire: ExpireClient;
  refund: RefundClient;

  constructor(client: CoreClient) {
    super(client);

    this.expire = new ExpireClient(this._client);
    this.refund = new RefundClient(this._client);
  }
  /**
   * Create a transient or continuous payment intent
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1PaymentIntentsResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/paymentIntents",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1PaymentIntentsIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/paymentIntents/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.list({});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1PaymentIntentsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/paymentIntents",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ context: request.context }),
        qs.stringify({ from: request.from }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ status: request.status }),
        qs.stringify({ to: request.to }),
      ],
      responseType: "json",
      opts,
    });
  }
}
