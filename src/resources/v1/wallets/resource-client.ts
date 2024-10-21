import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import { AddressesClient } from "@circle/all_apis/resources/v1/wallets/addresses";
import * as requests from "@circle/all_apis/resources/v1/wallets/request-types";
import qs from "qs";

export class WalletsClient extends CoreResourceClient {
  addresses: AddressesClient;

  constructor(client: CoreClient) {
    super(client);

    this.addresses = new AddressesClient(this._client);
  }
  /**
   * Creates an end user wallet.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1WalletsResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/wallets",
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

const res = await client.v1.wallets.get({ walletId: "0123456789" });
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1WalletsWalletIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/wallets/${request.walletId}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
   * Retrieves a list of a user's wallets.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1WalletsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/wallets",
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
