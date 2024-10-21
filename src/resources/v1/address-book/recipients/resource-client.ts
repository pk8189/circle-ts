import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/address-book/recipients/request-types";
import qs from "qs";

export class RecipientsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
 * import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.create({
  data: {
    address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
    chain: types.ChainEnum.Algo,
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    metadata: {},
  },
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1AddressBookRecipientsResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/addressBook/recipients",
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

const res = await client.v1.addressBook.recipients.patch({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {},
});
 */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PatchV1AddressBookRecipientsIdResponse> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v1/addressBook/recipients/${request.id}`,
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

const res = await client.v1.addressBook.recipients.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1AddressBookRecipientsIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/addressBook/recipients/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.list({});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1AddressBookRecipientsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/addressBook/recipients",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ address: request.address }),
        qs.stringify({ chain: request.chain }),
        qs.stringify({ email: request.email }),
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
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.delete({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<null> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/addressBook/recipients/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
