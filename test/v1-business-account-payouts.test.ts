import Client, { types } from "@circle/all_apis";

describe("tests client.v1.businessAccount.payouts.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.payouts.create({
      data: {
        amount: { amount: "3.14", currency: types.FiatCurrencyEnum.Brl },
        destination: {
          id: "b8627ae8-732b-4d25-b947-1df8f4007a29",
          type: types.BusinessDestinationRequestTypeEnum.Cbit,
        },
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        toAmount: { amount: "3.14", currency: types.FiatCurrencyEnum.Brl },
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.payouts.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.payouts.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.payouts.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.payouts.list({});
    console.log(response);
  });
});
