import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/wallets/addresses/request-types";
import qs from "qs";

export class AddressesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you're requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1WalletsWalletIdAddressesResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/wallets/${request.walletId}/addresses`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Retrieves a list of addresses associated with a wallet.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1WalletsWalletIdAddressesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/wallets/${request.walletId}/addresses`,
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
