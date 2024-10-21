import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/payouts/request-types";
import qs from "qs";

export class PayoutsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   *
   * Create a payout.
   *
   * The following table includes the supported pairs of amount.currency and toAmount.currency for FX payouts:
   *
   * | amount.currency  | toAmount.currency |
   * | ---------------- | ------------ |
   *  | USD | BRL |
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1BusinessAccountPayoutsResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/businessAccount/payouts",
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

const res = await client.v1.businessAccount.payouts.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountPayoutsIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/payouts/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.payouts.list({});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountPayoutsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/payouts",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ destination: request.destination }),
        qs.stringify({ from: request.from }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ status: request.status }, { arrayFormat: "comma" }),
        qs.stringify({ to: request.to }),
        qs.stringify({ type: request.typeQuery }),
      ],
      responseType: "json",
      opts,
    });
  }
}
