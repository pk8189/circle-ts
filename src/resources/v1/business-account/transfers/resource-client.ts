import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/transfers/request-types";
import qs from "qs";

export class TransfersClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * A transfer can be made from an existing business account to a blockchain location.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1BusinessAccountTransfersResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/businessAccount/transfers",
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

const res = await client.v1.businessAccount.transfers.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountTransfersIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/transfers/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
   * Searches for transfers from your business account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountTransfersResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/transfers",
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
