import Client, { types } from "@circle/all_apis";

describe("tests client.v1.exchange.rates.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.exchange.rates.get({
      tradingPair: types.GetV1ExchangeRatesTradingPairTradingPairEnum.BtcUsd,
    });
    console.log(response);
  });
});
