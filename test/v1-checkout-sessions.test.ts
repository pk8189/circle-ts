import Client, { types } from "@circle/all_apis";

describe("tests client.v1.checkoutSessions.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.checkoutSessions.create({
      data: {
        amount: {
          amount: "3.14",
          currency: types.CheckoutSessionMoneyCurrencyEnum.Btc,
        },
        successUrl: "https://www.example.com/success",
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.checkoutSessions.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.checkoutSessions.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.checkoutSessions.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.checkoutSessions.list({});
    console.log(response);
  });
});
