import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/payment-intents/refund/request-types";

export class RefundClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
 * import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.refund.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {
    amount: {
      currency: types.CryptoRefundCreationRequestAmountCurrencyEnum.Btc,
    },
    destination: {
      address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
      chain: types.ChainEnum.Algo,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    toAmount: {
      amount: "3.14",
      currency: types.CryptoRefundCreationRequestToAmountCurrencyEnum.Btc,
    },
  },
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1PaymentIntentsIdRefundResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/paymentIntents/${request.id}/refund`,
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
