import Client from "@circle/all_apis";

describe("tests client.v1.checkoutSessions.extend.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.checkoutSessions.extend.create({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
      data: { extendTime: 3600 },
    });
    console.log(response);
  });
});
