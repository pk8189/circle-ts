import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import { CancelClient } from "@circle/all_apis/resources/v1/payments/cancel";
import { CaptureClient } from "@circle/all_apis/resources/v1/payments/capture";
import { CryptoClient } from "@circle/all_apis/resources/v1/payments/crypto";
import { PresignClient } from "@circle/all_apis/resources/v1/payments/presign";
import { RefundClient } from "@circle/all_apis/resources/v1/payments/refund";
import * as requests from "@circle/all_apis/resources/v1/payments/request-types";
import qs from "qs";

export class PaymentsClient extends CoreResourceClient {
  presign: PresignClient;
  crypto: CryptoClient;
  cancel: CancelClient;
  capture: CaptureClient;
  refund: RefundClient;

  constructor(client: CoreClient) {
    super(client);

    this.presign = new PresignClient(this._client);
    this.crypto = new CryptoClient(this._client);
    this.cancel = new CancelClient(this._client);
    this.capture = new CaptureClient(this._client);
    this.refund = new RefundClient(this._client);
  }
  /**
 * import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.create({
  data: {
    amount: { amount: "3.14", currency: types.FiatMoneyUsdCurrencyEnum.Usd },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    metadata: {
      email: "satoshi@circle.com",
      ipAddress: "244.28.239.130",
      sessionId: "DE6FA86F60BB47B379307F851E238617",
    },
    source: {},
    verification: types.PaymentCreationRequestVerificationEnum.Cvv,
  },
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1PaymentsResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payments",
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

const res = await client.v1.payments.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
 */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1PaymentsIdResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payments/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
 * import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.list({});
 */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1PaymentsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payments",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ from: request.from }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ paymentIntentId: request.paymentIntentId }),
        qs.stringify({ settlementId: request.settlementId }),
        qs.stringify({ source: request.source }),
        qs.stringify({ status: request.status }),
        qs.stringify({ to: request.to }),
        qs.stringify({ type: request.typeQuery }, { arrayFormat: "comma" }),
      ],
      responseType: "json",
      opts,
    });
  }
}
