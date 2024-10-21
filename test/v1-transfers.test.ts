import Client, { types } from "@circle/all_apis";

describe("tests client.v1.transfers.create", () => {
  test.concurrent("201 success_request", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.transfers.create({
      data: {
        amount: { amount: "3.14", currency: types.MoneyCurrencyEnum.Usd },
        destination: {
          address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
          chain: types.ChainEnum.Algo,
          type: types.TransferRequestBlockchainLocationTypeEnum.Blockchain,
        },
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        source: {
          id: "12345",
          type: types.TransferRequestSourceWalletLocationTypeEnum.Wallet,
        },
      },
    });
    console.log(response);
  });
  test.concurrent("201 success_travel_rule", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.transfers.create({
      data: {
        amount: { amount: "3000.00", currency: types.MoneyCurrencyEnum.Usd },
        destination: {
          address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
          chain: types.ChainEnum.Algo,
          type: types.TransferRequestBlockchainLocationTypeEnum.Blockchain,
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
              type: types.IdentityTypeEnum.Individual,
            },
          ],
          type: types.TransferRequestSourceWalletLocationTypeEnum.Wallet,
        },
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.transfers.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.transfers.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.transfers.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.transfers.list({});
    console.log(response);
  });
});
