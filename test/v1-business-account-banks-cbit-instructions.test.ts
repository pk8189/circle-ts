import Client from "@circle/all_apis";

describe("tests client.v1.businessAccount.banks.cbit.instructions.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response =
      await client.v1.businessAccount.banks.cbit.instructions.list({
        id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
      });
    console.log(response);
  });
});
