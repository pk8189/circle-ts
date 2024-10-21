import Client, { types } from "@circle/all_apis";

describe("tests client.v1.payments.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.payments.create({
      data: {
        amount: {
          amount: "3.14",
          currency: types.FiatMoneyUsdCurrencyEnum.Usd,
        },
        autoCapture: true,
        channel: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        description: "Payment",
        encryptedData: "UHVibGljS2V5QmFzZTY0RW5jb2RlZA==",
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        keyId: "key1",
        metadata: {
          email: "satoshi@circle.com",
          ipAddress: "244.28.239.130",
          phoneNumber: "+14155555555",
          sessionId: "DE6FA86F60BB47B379307F851E238617",
        },
        source: {
          id: "b8627ae8-732b-4d25-b947-1df8f4007a29",
          type: types.SourceTypeEnum.Card,
        },
        verification: types.PaymentCreationRequestVerificationEnum.Cvv,
        verificationFailureUrl:
          "https://www.example.com/3ds/verificationfailure",
        verificationSuccessUrl:
          "https://www.example.com/3ds/verificationsuccessful",
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.payments.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.payments.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.payments.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.payments.list({});
    console.log(response);
  });
});
