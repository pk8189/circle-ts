import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/chargebacks/request-types";
import qs from "qs";

export class ChargebacksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.chargebacks.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1ChargebacksIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/chargebacks/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
   * Retrieve list of chargebacks. Results will be sorted by create date descending: more recent chargebacks will be at the beginning of the list.
   *
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1ChargebacksResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/chargebacks",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ from: request.from }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ paymentId: request.paymentId }),
        qs.stringify({ to: request.to }),
      ],
      responseType: "json",
      opts,
    });
  }
}
