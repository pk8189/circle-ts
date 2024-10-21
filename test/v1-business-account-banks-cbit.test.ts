import Client from "@circle/all_apis";

describe("tests client.v1.businessAccount.banks.cbit.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.banks.cbit.create({
      data: {
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        walletAddress: "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e",
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.banks.cbit.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.banks.cbit.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.banks.cbit.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.banks.cbit.list();
    console.log(response);
  });
});
