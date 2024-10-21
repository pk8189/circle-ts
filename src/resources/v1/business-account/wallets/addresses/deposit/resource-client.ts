import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/wallets/addresses/deposit/request-types";

export class DepositClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you're requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1BusinessAccountWalletsAddressesDepositResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/businessAccount/wallets/addresses/deposit",
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

const res = await client.v1.businessAccount.wallets.addresses.deposit.list();
 */
  list(
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountWalletsAddressesDepositResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/wallets/addresses/deposit",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
