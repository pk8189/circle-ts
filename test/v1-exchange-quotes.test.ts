import Client, { types } from "@circle/all_apis";

describe("tests client.v1.exchange.quotes.create", () => {
  test.concurrent("201 success_non_null_from_amount", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.exchange.quotes.create({
      data: {
        from: { amount: "string", currency: types.FiatCurrencyEnum.Mxn },
        to: { currency: types.FiatCurrencyEnum.Usd },
      },
    });
    console.log(response);
  });
  test.concurrent("201 success_non_null_to_amount", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.exchange.quotes.create({
      data: {
        from: { currency: types.FiatCurrencyEnum.Mxn },
        to: { amount: "string", currency: types.FiatCurrencyEnum.Usd },
      },
    });
    console.log(response);
  });
  test.concurrent("201 success_null_amounts", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.exchange.quotes.create({
      data: {
        from: { currency: types.FiatCurrencyEnum.Mxn },
        to: { currency: types.FiatCurrencyEnum.Usd },
      },
    });
    console.log(response);
  });
});
