import Client from "@circle/all_apis";

describe("tests client.v1.mocks.cards.chargebacks.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.mocks.cards.chargebacks.create({
      data: { paymentId: "fc988ed5-c129-4f70-a064-e5beb7eb8e32" },
    });
    console.log(response);
  });
});
