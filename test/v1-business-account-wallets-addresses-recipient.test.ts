import Client, { types } from "@circle/all_apis";

describe("tests client.v1.businessAccount.wallets.addresses.recipient.create", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response =
      await client.v1.businessAccount.wallets.addresses.recipient.create({
        data: {
          address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
          addressTag: "123456789",
          chain: types.ChainEnum.Algo,
          currency: types.CurrencyEnum.Btc,
          description: "My USDC address at a cryptocurrency exchange",
          idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        },
      });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.wallets.addresses.recipient.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response =
      await client.v1.businessAccount.wallets.addresses.recipient.list({});
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.wallets.addresses.recipient.delete", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response =
      await client.v1.businessAccount.wallets.addresses.recipient.delete({
        id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
      });
    console.log(response);
  });
});
