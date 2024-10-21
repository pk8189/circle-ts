import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/payments/presign/request-types";
import qs from "qs";

export class PresignClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.presign.list({
  endUserAddress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
  paymentIntentId: "b48c8962-8e9f-40c3-9f1d-d9adde2ffe61",
});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1PaymentsPresignResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payments/presign",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ amount: request.amount }),
        qs.stringify({ currency: request.currency }),
        qs.stringify({ endUserAddress: request.endUserAddress }),
        qs.stringify({ paymentIntentId: request.paymentIntentId }),
      ],
      responseType: "json",
      opts,
    });
  }
}
