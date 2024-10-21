import Client, { types } from "@circle/all_apis";

describe("tests client.v1.businessAccount.banks.pix.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.banks.pix.create({
      data: {
        accountNumber: "322286803",
        accountType: types.PixAccountTypeEnum.Checking,
        branchCode: "123",
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        ispb: "68033222",
        name: "CIRCLE INTERNET FINANCIAL INC",
        taxId: "57112345675712",
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.banks.pix.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.banks.pix.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.businessAccount.banks.pix.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.businessAccount.banks.pix.list();
    console.log(response);
  });
});
