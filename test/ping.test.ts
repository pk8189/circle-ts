import Client from "@circle/all_apis";

describe("tests client.ping.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.ping.list();
    console.log(response);
  });
});
