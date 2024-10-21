import Client, { types } from "@circle/all_apis";

describe("tests client.v1.payouts.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.payouts.create({
      data: {
        amount: { amount: "3.14", currency: types.MoneyCurrencyEnum.Btc },
        destination: {
          id: "b8627ae8-732b-4d25-b947-1df8f4007a29",
          type: types.CryptoPayoutDestinationTypeEnum.AddressBook,
        },
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        source: {
          id: "12345",
          identities: [
            {
              addresses: [
                {
                  city: "Boston",
                  country: "US",
                  district: "MA",
                  line1: "100 Money Street",
                  line2: "Suite 1",
                  postalCode: "01234",
                },
              ],
              name: "Satoshi Nakamoto",
              type: types.IdentityTypeEnum.Business,
            },
          ],
          type: types.TransferSourceWalletLocationTypeEnum.Wallet,
        },
        toAmount: { currency: types.ToAmountCurrencyEnum.Btc },
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.payouts.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.payouts.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.payouts.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.payouts.list({});
    console.log(response);
  });
});
