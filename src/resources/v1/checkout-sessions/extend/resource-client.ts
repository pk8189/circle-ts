import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/checkout-sessions/extend/request-types";

export class ExtendClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.checkoutSessions.extend.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {},
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1CheckoutSessionsIdExtendResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/checkoutSessions/${request.id}/extend`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
