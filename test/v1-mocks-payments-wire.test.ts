import Client, { types } from "@circle/all_apis";

describe("tests client.v1.mocks.payments.wire.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.mocks.payments.wire.create({
      data: {
        amount: {
          amount: "3.14",
          currency: types.FiatMoneyUsdCurrencyEnum.Usd,
        },
        beneficiaryBank: { accountNumber: "11111111" },
        trackingRef: "CIR13FB13A",
      },
    });
    console.log(response);
  });
});
