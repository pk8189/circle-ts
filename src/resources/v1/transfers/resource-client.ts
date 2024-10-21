import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/transfers/request-types";
import qs from "qs";

export class TransfersClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * A transfer can be made from an existing funded wallet to a blockchain address or another wallet.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1TransfersResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/transfers",
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

const res = await client.v1.transfers.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1TransfersIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/transfers/${request.id}`,
      auth: ["bearerAuth"],
      query: [qs.stringify({ returnIdentities: request.returnIdentities })],
      responseType: "json",
      opts,
    });
  }
  /**
   * Searches for transfers involving the provided wallets. If no wallet ids are provided, searches all wallets associated with your Circle API account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1TransfersResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/transfers",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ destinationWalletId: request.destinationWalletId }),
        qs.stringify({ from: request.from }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ returnIdentities: request.returnIdentities }),
        qs.stringify({ sourceWalletId: request.sourceWalletId }),
        qs.stringify({ to: request.to }),
        qs.stringify({ walletId: request.walletId }),
      ],
      responseType: "json",
      opts,
    });
  }
}
