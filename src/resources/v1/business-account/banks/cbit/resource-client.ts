import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import { InstructionsClient } from "@circle/all_apis/resources/v1/business-account/banks/cbit/instructions";
import * as requests from "@circle/all_apis/resources/v1/business-account/banks/cbit/request-types";

export class CbitClient extends CoreResourceClient {
  instructions: InstructionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.instructions = new InstructionsClient(this._client);
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.cbit.create({
  data: {
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    walletAddress: "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e",
  },
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1BusinessAccountBanksCbitResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/businessAccount/banks/cbit",
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

const res = await client.v1.businessAccount.banks.cbit.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksCbitIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/banks/cbit/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.cbit.list();
 */
  list(
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksCbitResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/banks/cbit",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
