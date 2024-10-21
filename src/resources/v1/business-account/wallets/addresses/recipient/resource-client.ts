import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/wallets/addresses/recipient/request-types";
import qs from "qs";

export class RecipientClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Stores an external blockchain address. Once added, the recipient address must be verified to ensure that you know and trust each new address. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1BusinessAccountWalletsAddressesRecipientResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/businessAccount/wallets/addresses/recipient",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Returns a list of recipient addresses that have each been verified and are eligible for transfers. Any recipient addresses pending administrator verification are not included in the response.
   *
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountWalletsAddressesRecipientResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/wallets/addresses/recipient",
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
  /**
   * Deletes an external blockchain address. The recipient address must be in an 'active' or 'pending' state in order to be deleted successfully.
   *
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<null> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/businessAccount/wallets/addresses/recipient/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
