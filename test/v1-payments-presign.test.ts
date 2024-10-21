import Client from "@circle/all_apis";

describe("tests client.v1.payments.presign.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.payments.presign.list({
      endUserAddress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
      paymentIntentId: "b48c8962-8e9f-40c3-9f1d-d9adde2ffe61",
    });
    console.log(response);
  });
});
