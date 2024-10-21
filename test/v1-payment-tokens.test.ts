import Client, { types } from "@circle/all_apis";

describe("tests client.v1.paymentTokens.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.paymentTokens.create({
      data: {
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        tokenData: {
          data: "t7GeajLB9skXB6QSWfEpPA4WPhDqB7ekdd+...T6Ms7PhiNZpuGEE2QE=",
          header: {
            ephemeralPublicKey: "MFkwEwYHKoZIzj.../zlsw==",
            publicKeyHash: "tqYV+tmG9aMh+l/K6cicUnPqkb1gUiLjSTM9gEz6Nl0=",
            transactionId:
              "3cee89679130a4b2617c76118a1c62fd400cd45b49dc0916d5b951b560cd17b4",
          },
          signature:
            "MIAGCSqGSIb3DQEHAqCAMIACAQEx.../WIDkHWiFuSm5a3NVox7DlyIf0AAAAAAAA=",
          version: types.ApplePayTokenVersionEnum.EcV1,
        },
        type: types.PaymentTokenRequestTypeEnum.Applepay,
      },
    });
    console.log(response);
  });
});
