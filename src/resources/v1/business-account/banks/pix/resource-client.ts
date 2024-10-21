import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import { InstructionsClient } from "@circle/all_apis/resources/v1/business-account/banks/pix/instructions";
import * as requests from "@circle/all_apis/resources/v1/business-account/banks/pix/request-types";

export class PixClient extends CoreResourceClient {
  instructions: InstructionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.instructions = new InstructionsClient(this._client);
  }
  /**
 * import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.pix.create({
  data: {
    accountNumber: "322286803",
    accountType: types.PixAccountTypeEnum.Checking,
    branchCode: "123",
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    ispb: "68033222",
    name: "CIRCLE INTERNET FINANCIAL INC",
    taxId: "57112345675712",
  },
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1BusinessAccountBanksPixResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/businessAccount/banks/pix",
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

const res = await client.v1.businessAccount.banks.pix.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksPixIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/banks/pix/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.pix.list();
 */
  list(
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksPixResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/banks/pix",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
