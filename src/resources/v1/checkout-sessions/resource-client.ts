import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import { ExtendClient } from "@circle/all_apis/resources/v1/checkout-sessions/extend";
import * as requests from "@circle/all_apis/resources/v1/checkout-sessions/request-types";
import qs from "qs";

export class CheckoutSessionsClient extends CoreResourceClient {
  extend: ExtendClient;

  constructor(client: CoreClient) {
    super(client);

    this.extend = new ExtendClient(this._client);
  }
  /**
 * import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.checkoutSessions.create({
  data: {
    amount: {
      amount: "3.14",
      currency: types.CheckoutSessionMoneyCurrencyEnum.Btc,
    },
  },
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1CheckoutSessionsResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/checkoutSessions",
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

const res = await client.v1.checkoutSessions.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1CheckoutSessionsIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/checkoutSessions/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.checkoutSessions.list({});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1CheckoutSessionsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/checkoutSessions",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ from: request.from }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ to: request.to }),
      ],
      responseType: "json",
      opts,
    });
  }
}
