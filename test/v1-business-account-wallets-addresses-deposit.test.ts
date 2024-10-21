import Client, { types } from "@circle/all_apis";

describe("tests client.v1.businessAccount.wallets.addresses.deposit.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response =
      await client.v1.businessAccount.wallets.addresses.deposit.create({
        data: {
          chain: types.ChainEnum.Algo,
          currency: types.CurrencyEnum.Btc,
          idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        },
      });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.wallets.addresses.deposit.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response =
      await client.v1.businessAccount.wallets.addresses.deposit.list();
    console.log(response);
  });
});
