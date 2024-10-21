import Client, { types } from "@circle/all_apis";

describe("tests client.v1.addressBook.recipients.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.addressBook.recipients.create({
      data: {
        address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
        addressTag: "123456789",
        chain: types.ChainEnum.Algo,
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        metadata: {
          bns: "sample.circle",
          email: "satoshi@circle.com",
          nickname: "sample nickname",
        },
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.addressBook.recipients.patch", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.addressBook.recipients.patch({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
      data: {
        metadata: {
          bns: "sample.circle",
          email: "satoshi@circle.com",
          nickname: "sample nickname",
        },
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.addressBook.recipients.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.addressBook.recipients.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.addressBook.recipients.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.addressBook.recipients.list({});
    console.log(response);
  });
});

describe("tests client.v1.addressBook.recipients.delete", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.addressBook.recipients.delete({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});
