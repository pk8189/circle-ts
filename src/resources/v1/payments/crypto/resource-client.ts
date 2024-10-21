import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/payments/crypto/request-types";

export class CryptoClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
 * import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.crypto.create({
  data: {
    amount: {
      amount: "3.14",
      currency: types.CryptoPaymentsMoneyCurrencyEnum.Btc,
    },
    destination: {
      address: "0xda1ab716f7f7b3cb036a7fd74e5ca852126834c1",
      chain: types.CryptoPaymentDestinationChainEnum.Eth,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    paymentIntentId: "4e9fa5b1-3964-4f02-a7ba-811cc5d94be1",
    protocolMetadata: {
      metaTxNonce:
        "0xfdb476566b75311fdd14444e6a77630c36e653a3e255adcaa7c34f3babc1de76",
      rawSignature:
        "0xcff7ef7a24b88d83fa3d6e81b41c9cef19cc0119c085a6ef98cb1b6bc9436a9f18dcb2d46b9cb4d31a7031466b450bbe1e6c0230c5503c7a68e04055b4be0cbc1b",
      signatureValidAfter: "1675104393",
      signatureValidBefore: "1675107967",
      type: types.MetadataCryptoPaymentTypeEnum.TransferWithAuthorization,
    },
    source: {
      address: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
      type: types.CryptoPaymentSourceTypeEnum.Blockchain,
    },
  },
});
 */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1PaymentsCryptoResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payments/crypto",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
