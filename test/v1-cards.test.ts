import Client from "@circle/all_apis";

describe("tests client.v1.cards.put", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.cards.put({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
      data: {
        billingDetails: {
          city: "Boston",
          country: "US",
          district: "MA",
          email: "satoshi@circle.com",
          firstName: "Satoshi",
          lastName: "Nakamoto",
          line1: "100 Money Street",
          line2: "Suite 1",
          phone: "+14155555555",
          postalCode: "01234",
        },
        encryptedData: "UHVibGljS2V5QmFzZTY0RW5jb2RlZA==",
        expMonth: 1,
        expYear: 2020,
        keyId: "key1",
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.cards.create", () => {
  test.concurrent("201 success_default", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.cards.create({
      data: {
        billingDetails: {
          city: "Boston",
          country: "US",
          district: "MA",
          line1: "100 Money Street",
          line2: "Suite 1",
          name: "Satoshi Nakamoto",
          postalCode: "01234",
        },
        encryptedData:
          "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0JNQTBYV1NGbEZScFZoQVFmL2J2bVVkNG5LZ3dkbExKVTlEdEFEK0p5c0VOTUxuOUlRUWVGWnZJUWEKMGgzQklpRFNRU0RMZmI0NEs2SXZMeTZRbm54bmFLcWx0MjNUSmtPd2hGWFIrdnNSMU5IbnVHN0lUNWJECmZzeVdleXlNK1JLNUVHV0thZ3NmQ2tWamh2NGloY29xUnlTTGtJbWVmRzVaR0tMRkJTTTBsTFNPWFRURQpiMy91eU1zMVJNb3ZiclNvbXkxa3BybzUveWxabWVtV2ZsU1pWQlhNcTc1dGc1YjVSRVIraXM5ckc0cS8KMXl0M0FOYXA3UDhKekFhZVlyTnVNZGhGZFhvK0NFMC9CQnN3L0NIZXdhTDk4SmRVUEV0NjA5WFRHTG9kCjZtamY0YUtMQ01xd0RFMkNVb3dPdE8vMzVIMitnVDZKS3FoMmtjQUQyaXFlb3luNWcralRHaFNyd3NKWgpIdEphQWVZZXpGQUVOaFo3Q01IOGNsdnhZVWNORnJuNXlMRXVGTkwwZkczZy95S3loclhxQ0o3UFo5b3UKMFVxQjkzQURKWDlJZjRBeVQ2bU9MZm9wUytpT2lLall4bG1NLzhlVWc3OGp1OVJ5T1BXelhyTzdLWTNHClFSWm8KPXc1dEYKLS0tLS1FTkQgUEdQIE1FU1NBR0UtLS0tLQo",
        expMonth: 1,
        expYear: 2020,
        idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
        keyId: "key1",
        metadata: {
          email: "satoshi@circle.com",
          ipAddress: "244.28.239.130",
          phoneNumber: "+14155555555",
          sessionId: "DE6FA86F60BB47B379307F851E238617",
        },
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.cards.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.cards.get({
      id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
    });
    console.log(response);
  });
});

describe("tests client.v1.cards.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      token: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/circle-api/0.1.0",
    });
    const response = await client.v1.cards.list({});
    console.log(response);
  });
});
