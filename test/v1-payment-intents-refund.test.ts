import Client, { types } from "@circle/all_apis";

describe("tests client.v1.paymentIntents.refund.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.paymentIntents.refund.create({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
      data: {
        amount: {
          currency: types.CryptoRefundCreationRequestAmountCurrencyEnum.Btc,
        },
        destination: {
          address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
          addressTag: "123456789",
          chain: types.ChainEnum.Algo,
        },
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        toAmount: {
          amount: "3.14",
          currency: types.CryptoRefundCreationRequestToAmountCurrencyEnum.Btc,
        },
      },
    });
    console.log(response);
  });
});
