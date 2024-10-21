import Client, { types } from "@circle/all_apis";

describe("tests client.v1.paymentIntents.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.paymentIntents.create({
      data: {
        amount: {
          amount: "3.14",
          currency: types.CryptoPaymentsMoneyCurrencyEnum.Btc,
        },
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        paymentMethods: [
          {
            chain: types.ChainEnum.Algo,
            type: types.PaymentMethodBlockchainTypeEnum.Blockchain,
          },
        ],
        settlementCurrency:
          types.PaymentIntentCreationRequestSettlementCurrencyEnum.Btc,
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.paymentIntents.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.paymentIntents.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.paymentIntents.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.paymentIntents.list({});
    console.log(response);
  });
});
