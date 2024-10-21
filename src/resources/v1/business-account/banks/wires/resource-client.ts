import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import { InstructionsClient } from "@circle/all_apis/resources/v1/business-account/banks/wires/instructions";
import * as requests from "@circle/all_apis/resources/v1/business-account/banks/wires/request-types";

export class WiresClient extends CoreResourceClient {
  instructions: InstructionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.instructions = new InstructionsClient(this._client);
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.wires.create({ data: {} });
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1BusinessAccountBanksWiresResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/businessAccount/banks/wires",
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

const res = await client.v1.businessAccount.banks.wires.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksWiresIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/banks/wires/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.wires.list();
 */
  list(
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksWiresResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/banks/wires",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
