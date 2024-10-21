
## SDK Usage Examples


### Delete a recipient


**API Endpoint**: `DELETE /v1/addressBook/recipients/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.delete({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### Delete a recipient address
Deletes an external blockchain address. The recipient address must be in an 'active' or 'pending' state in order to be deleted successfully.


**API Endpoint**: `DELETE /v1/businessAccount/wallets/addresses/recipient/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.wallets.addresses.recipient.delete({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### Remove a notification subscription
To remove a subscription, all its subscription requests' statuses must be either 'confirmed', 'deleted' or a combination of those. A subscription with at least one 'pending' subscription request cannot be removed.

**API Endpoint**: `DELETE /v1/notifications/subscriptions/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.notifications.subscriptions.delete({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### Ping
Checks that the service is running.

**API Endpoint**: `GET /ping`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.ping.list();
```

    
### List all recipients


**API Endpoint**: `GET /v1/addressBook/recipients`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.list({});
```

    
### Get a recipient


**API Endpoint**: `GET /v1/addressBook/recipients/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all balances
Retrieves the balance of merchant funds that have settled and also of funds that have been sent for processing but have not yet settled.

**API Endpoint**: `GET /v1/balances`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.balances.list();
```

    
### List all balances
Retrieves the balance of funds that are available for use.

**API Endpoint**: `GET /v1/businessAccount/balances`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.balances.list();
```

    
### List all CBIT bank accounts.


**API Endpoint**: `GET /v1/businessAccount/banks/cbit`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.cbit.list();
```

    
### Get a CBIT bank account


**API Endpoint**: `GET /v1/businessAccount/banks/cbit/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.cbit.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### Get CBIT instructions
Get the CBIT transfer instructions into the Circle bank account given your bank account id.

**API Endpoint**: `GET /v1/businessAccount/banks/cbit/{id}/instructions`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.cbit.instructions.list({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all PIX bank accounts.


**API Endpoint**: `GET /v1/businessAccount/banks/pix`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.pix.list();
```

    
### Get a PIX bank account


**API Endpoint**: `GET /v1/businessAccount/banks/pix/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.pix.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### Get PIX instructions
Get the PIX transfer instructions into the Circle bank account given your bank account id.

**API Endpoint**: `GET /v1/businessAccount/banks/pix/{id}/instructions`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.pix.instructions.list({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all Wire bank accounts


**API Endpoint**: `GET /v1/businessAccount/banks/wires`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.wires.list();
```

    
### Get a Wire bank account


**API Endpoint**: `GET /v1/businessAccount/banks/wires/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.wires.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### Get Wire instructions
Get the wire transfer instructions into the Circle bank account given your bank account id.

**API Endpoint**: `GET /v1/businessAccount/banks/wires/{id}/instructions`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.wires.instructions.list({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all deposits
Searches for deposits sent to your business account. If the date parameters are omitted, returns the most recent deposits. This endpoint returns up to 50 deposits in descending chronological order or pageSize, if provided.

**API Endpoint**: `GET /v1/businessAccount/deposits`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.deposits.list({});
```

    
### List all payouts


**API Endpoint**: `GET /v1/businessAccount/payouts`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.payouts.list({});
```

    
### Get a payout


**API Endpoint**: `GET /v1/businessAccount/payouts/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.payouts.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all transfers
Searches for transfers from your business account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.

**API Endpoint**: `GET /v1/businessAccount/transfers`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.transfers.list({});
```

    
### Get a transfer


**API Endpoint**: `GET /v1/businessAccount/transfers/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.transfers.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all deposit addresses


**API Endpoint**: `GET /v1/businessAccount/wallets/addresses/deposit`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.wallets.addresses.deposit.list();
```

    
### List all recipient addresses
Returns a list of recipient addresses that have each been verified and are eligible for transfers. Any recipient addresses pending administrator verification are not included in the response.


**API Endpoint**: `GET /v1/businessAccount/wallets/addresses/recipient`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.wallets.addresses.recipient.list(
  {},
);
```

    
### List all cards


**API Endpoint**: `GET /v1/cards`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.cards.list({});
```

    
### Get a card


**API Endpoint**: `GET /v1/cards/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.cards.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all channels
Retrieve a list of channels with details (e.g. `cardDescriptor`, `achDescriptor`, etc.).

**API Endpoint**: `GET /v1/channels`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.channels.list();
```

    
### List all chargebacks
Retrieve list of chargebacks. Results will be sorted by create date descending: more recent chargebacks will be at the beginning of the list.


**API Endpoint**: `GET /v1/chargebacks`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.chargebacks.list({});
```

    
### Get a chargeback


**API Endpoint**: `GET /v1/chargebacks/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.chargebacks.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all checkout sessions


**API Endpoint**: `GET /v1/checkoutSessions`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.checkoutSessions.list({});
```

    
### Get a checkout session


**API Endpoint**: `GET /v1/checkoutSessions/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.checkoutSessions.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### Get configuration info
Retrieves general configuration information.

**API Endpoint**: `GET /v1/configuration`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.configuration.list();
```

    
### Get public key
Retrieves an RSA public key to be used in encrypting data sent to the API. Your public keys change infrequently, so we encourage you to cache this response value locally for a duration of 24 hours or more.

**API Endpoint**: `GET /v1/encryption/public`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.encryption.pub.list();
```

    
### Get a exchange rate
Fetch the current rates for the specified trading pair. The trading pair is defined by a base currency followed by a quote currency. The response contains buy and sell rates denominated in the quote currency. **Exchange rate is an estimate only and is subject to change by the time you submit the actual request.**

**API Endpoint**: `GET /v1/exchange/rates/{trading-pair}`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.exchange.rates.get({
  tradingPair: types.GetV1ExchangeRatesTradingPairTradingPairEnum.BtcUsd,
});
```

    
### List all NET burn daily fee calculations
Searches for NET burn fee daily calculations. This endpoint returns up to 50 daily fee amount calculations in descending chronological order or pageSize, if provided.

**API Endpoint**: `GET /v1/fees/redemption/net/dailyReports`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.fees.redemption.net.dailyReports.list({});
```

    
### List all notification subscriptions
Retrieve a list of existing notification subscriptions with details.

**API Endpoint**: `GET /v1/notifications/subscriptions`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.notifications.subscriptions.list();
```

    
### List all payment intents


**API Endpoint**: `GET /v1/paymentIntents`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.list({});
```

    
### Get a payment intent


**API Endpoint**: `GET /v1/paymentIntents/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all payments


**API Endpoint**: `GET /v1/payments`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.list({});
```

    
### Get a typed message for signing


**API Endpoint**: `GET /v1/payments/presign`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.presign.list({
  endUserAddress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
  paymentIntentId: "b48c8962-8e9f-40c3-9f1d-d9adde2ffe61",
});
```

    
### Get a payment


**API Endpoint**: `GET /v1/payments/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all payouts


**API Endpoint**: `GET /v1/payouts`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payouts.list({});
```

    
### Get a payout


**API Endpoint**: `GET /v1/payouts/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payouts.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all settlements


**API Endpoint**: `GET /v1/settlements`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.settlements.list({});
```

    
### Get a settlement


**API Endpoint**: `GET /v1/settlements/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.settlements.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all stablecoins
Retrieves total circulating supply for supported stablecoins across all chains. This endpoint is rate limited to one call per minute (based on IP).

**API Endpoint**: `GET /v1/stablecoins`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.stablecoins.list();
```

    
### List all transfers
Searches for transfers involving the provided wallets. If no wallet ids are provided, searches all wallets associated with your Circle API account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.

**API Endpoint**: `GET /v1/transfers`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.transfers.list({});
```

    
### Get a transfer


**API Endpoint**: `GET /v1/transfers/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.transfers.get({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
});
```

    
### List all wallets
Retrieves a list of a user's wallets.

**API Endpoint**: `GET /v1/wallets`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.wallets.list({});
```

    
### Get a wallet


**API Endpoint**: `GET /v1/wallets/{walletId}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.wallets.get({ walletId: "0123456789" });
```

    
### List all addresses
Retrieves a list of addresses associated with a wallet.

**API Endpoint**: `GET /v1/wallets/{walletId}/addresses`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.wallets.addresses.list({ walletId: "0123456789" });
```

    
### Modify a recipient


**API Endpoint**: `PATCH /v1/addressBook/recipients/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.patch({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {
    metadata: {
      bns: "sample.circle",
      email: "satoshi@circle.com",
      nickname: "sample nickname",
    },
  },
});
```

    
### Create a recipient


**API Endpoint**: `POST /v1/addressBook/recipients`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.addressBook.recipients.create({
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
```

    
### Create a CBIT bank account


**API Endpoint**: `POST /v1/businessAccount/banks/cbit`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.cbit.create({
  data: {
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    walletAddress: "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e",
  },
});
```

    
### Create a PIX bank account


**API Endpoint**: `POST /v1/businessAccount/banks/pix`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.pix.create({
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
```

    
### Create a Wire bank account


**API Endpoint**: `POST /v1/businessAccount/banks/wires`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.banks.wires.create({ data: {} });
```

    
### Create a payout

Create a payout.  

The following table includes the supported pairs of amount.currency and toAmount.currency for FX payouts:

| amount.currency  | toAmount.currency |
| ---------------- | ------------ |
 | USD | BRL |


**API Endpoint**: `POST /v1/businessAccount/payouts`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.payouts.create({
  data: {
    amount: { amount: "3.14", currency: types.FiatCurrencyEnum.Brl },
    destination: {
      id: "b8627ae8-732b-4d25-b947-1df8f4007a29",
      type: types.BusinessDestinationRequestTypeEnum.Cbit,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    toAmount: { amount: "3.14", currency: types.FiatCurrencyEnum.Brl },
  },
});
```

    
### Create a transfer
A transfer can be made from an existing business account to a blockchain location.

**API Endpoint**: `POST /v1/businessAccount/transfers`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.transfers.create({
  data: {
    amount: { amount: "3.14", currency: types.MoneyCurrencyEnum.Btc },
    destination: {
      addressId: "f1f36b85-cafe-484e-a46b-02340bfdb927",
      type: types.TransferRequestVerifiedBlockchainLocationTypeEnum
        .VerifiedBlockchain,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
  },
});
```

    
### Create a deposit address
Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you're requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status. 


**API Endpoint**: `POST /v1/businessAccount/wallets/addresses/deposit`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.wallets.addresses.deposit.create({
  data: {
    chain: types.ChainEnum.Algo,
    currency: types.CurrencyEnum.Btc,
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
  },
});
```

    
### Create a recipient address
Stores an external blockchain address. Once added, the recipient address must be verified to ensure that you know and trust each new address. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.


**API Endpoint**: `POST /v1/businessAccount/wallets/addresses/recipient`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.businessAccount.wallets.addresses.recipient.create({
  data: {
    address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
    addressTag: "123456789",
    chain: types.ChainEnum.Algo,
    currency: types.CurrencyEnum.Btc,
    description: "My USDC address at a cryptocurrency exchange",
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
  },
});
```

    
### Create a card


**API Endpoint**: `POST /v1/cards`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.cards.create({
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
```

    
### Create a checkout session


**API Endpoint**: `POST /v1/checkoutSessions`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.checkoutSessions.create({
  data: {
    amount: {
      amount: "3.14",
      currency: types.CheckoutSessionMoneyCurrencyEnum.Btc,
    },
    successUrl: "https://www.example.com/success",
  },
});
```

    
### Extend a checkout session


**API Endpoint**: `POST /v1/checkoutSessions/{id}/extend`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.checkoutSessions.extend.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: { extendTime: 3600 },
});
```

    
### Fetch exchange rate
Fetches an indicative exchange rate between two currencies. Either the from currency or to currency must be USD.

Note: The current market exchange rate will be applied when Circle receives the deposit.


**API Endpoint**: `POST /v1/exchange/quotes`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.exchange.quotes.create({
  data: {
    from: { amount: "string", currency: types.FiatCurrencyEnum.Mxn },
    to: { currency: types.FiatCurrencyEnum.Usd },
  },
});
```

    
### Create a mock chargeback
In the sandbox environment, initiate a mock chargeback of a specified payment.  The entire payment will be charged back for its full value.  The payment must be in the `paid` state (otherwise the endpoint will return a `404`), and each payment can only be charged back once (otherwise the endpoint will return a `409`).  This endpoint is only available in the sandbox environment.

**API Endpoint**: `POST /v1/mocks/cards/chargebacks`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.mocks.cards.chargebacks.create({
  data: { paymentId: "fc988ed5-c129-4f70-a064-e5beb7eb8e32" },
});
```

    
### Create a mock Wire payment
In the sandbox environment, initiate a mock wire payment that mimics the behavior of funds sent through the bank (wire) account linked to master wallet.

**API Endpoint**: `POST /v1/mocks/payments/wire`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.mocks.payments.wire.create({
  data: {
    amount: { amount: "3.14", currency: types.FiatMoneyUsdCurrencyEnum.Usd },
    beneficiaryBank: { accountNumber: "11111111" },
    trackingRef: "CIR13FB13A",
  },
});
```

    
### Create a notification subscription
Subscribe to receiving notifications at a given endpoint. The endpoint should be able to handle AWS SNS subscription requests. For more details see https://docs.aws.amazon.com/mobile/sdkforxamarin/developerguide/sns-send-http.html. Note, the sandbox environment allows a maximum of 3 active subscriptions; otherwise, this is limited to 1 active subscription and subsequent create requests will be rejected with a Limit Exceeded error.


**API Endpoint**: `POST /v1/notifications/subscriptions`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.notifications.subscriptions.create({
  data: { endpoint: "https://example.org/handler/for/notifications" },
});
```

    
### Create a payment intent
Create a transient or continuous payment intent

**API Endpoint**: `POST /v1/paymentIntents`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.create({
  data: {
    amount: {
      amount: "3.14",
      currency: types.CryptoPaymentsMoneyCurrencyEnum.Btc,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    paymentMethods: [
      {
        chain: types.ChainEnum.Algo,
        type: types.PaymentMethodBlockchainTypeEnum.Blockchain,
      },
    ],
    settlementCurrency:
      types.PaymentIntentCreationRequestSettlementCurrencyEnum.Btc,
  },
});
```

    
### Expire a payment intent


**API Endpoint**: `POST /v1/paymentIntents/{id}/expire`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.expire.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {},
});
```

    
### Refund a payment intent


**API Endpoint**: `POST /v1/paymentIntents/{id}/refund`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentIntents.refund.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {
    amount: {
      currency: types.CryptoRefundCreationRequestAmountCurrencyEnum.Btc,
    },
    destination: {
      address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
      addressTag: "123456789",
      chain: types.ChainEnum.Algo,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    toAmount: {
      amount: "3.14",
      currency: types.CryptoRefundCreationRequestToAmountCurrencyEnum.Btc,
    },
  },
});
```

    
### Create a payment token
Convert a digital wallet (Apple Pay, Google Pay) token to a single-use payment token.

**API Endpoint**: `POST /v1/paymentTokens`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.paymentTokens.create({
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
```

    
### Create a payment


**API Endpoint**: `POST /v1/payments`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.create({
  data: {
    amount: { amount: "3.14", currency: types.FiatMoneyUsdCurrencyEnum.Usd },
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
    verificationFailureUrl: "https://www.example.com/3ds/verificationfailure",
    verificationSuccessUrl:
      "https://www.example.com/3ds/verificationsuccessful",
  },
});
```

    
### Create a crypto payment


**API Endpoint**: `POST /v1/payments/crypto`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.crypto.create({
  data: {
    amount: {
      amount: "3.14",
      currency: types.CryptoPaymentsMoneyCurrencyEnum.Btc,
    },
    destination: {
      address: "0xda1ab716f7f7b3cb036a7fd74e5ca852126834c1",
      chain: types.CryptoPaymentDestinationChainEnum.Eth,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    paymentIntentId: "4e9fa5b1-3964-4f02-a7ba-811cc5d94be1",
    protocolMetadata: {
      metaTxNonce:
        "0xfdb476566b75311fdd14444e6a77630c36e653a3e255adcaa7c34f3babc1de76",
      rawSignature:
        "0xcff7ef7a24b88d83fa3d6e81b41c9cef19cc0119c085a6ef98cb1b6bc9436a9f18dcb2d46b9cb4d31a7031466b450bbe1e6c0230c5503c7a68e04055b4be0cbc1b",
      signatureValidAfter: "1675104393",
      signatureValidBefore: "1675107967",
      type: types.MetadataCryptoPaymentTypeEnum.TransferWithAuthorization,
    },
    quoteId: "c6ac001e-9812-4bc1-8dc3-1549b5adaa23",
    source: {
      address: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
      type: types.CryptoPaymentSourceTypeEnum.Blockchain,
    },
  },
});
```

    
### Cancel a payment
The payment will be voided if possible meaning the payment source will not be charged & the payment will never settle.
Otherwise, the payment will be refunded meaning the payment source will be charged & the payment will be refunded from deductions of future settlements.
Not all payments are eligible to be cancelled.

A successful response does *not* mean the payment has been cancelled; it only means the cancellation request is successfully submitted.


**API Endpoint**: `POST /v1/payments/{id}/cancel`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.cancel.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    reason: types.ReversalReasonEnum.BankAccountIneligible,
  },
});
```

    
### Capture a payment (BETA)
Warning: Please contact Circle support if you are planning on using this feature.

The given amount will be captured for the authorized payment if possible. If no amount is specified, the full amount
will be captured. You can only capture once per authorization.

A successful response does *not* mean the payment has been captured. It only means the capture request was successfully submitted.


**API Endpoint**: `POST /v1/payments/{id}/capture`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.capture.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {
    amount: { amount: "3.14", currency: types.FiatMoneyUsdCurrencyEnum.Usd },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
  },
});
```

    
### Refund a payment
The payment source will be refunded if possible. Not all payments are eligible to be cancelled.

A successful response does *not* mean the payment has been refunded; it only means the refund request is successfully submitted.


**API Endpoint**: `POST /v1/payments/{id}/refund`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payments.refund.create({
  id: "b3d9d2d5-4c12-4946-a09d-953e82fae2b0",
  data: {
    amount: { amount: "3.14", currency: types.FiatMoneyUsdCurrencyEnum.Usd },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    reason: types.ReversalReasonEnum.BankAccountIneligible,
  },
});
```

    
### Create a payout

Create a crypto payout.  

The following table includes the supported pairs of amount.currency and toAmount.currency for address book payouts:

| amount.currency  | toAmount.currency |
| ---------------- | ------------      |
| USD              | USD               |
| USD              | BTC               |
| USD              | ETH               |
| USD              | MTC               |
| EUR              | EUR               |
| BTC              | USD               |
| BTC              | BTC               |
| ETH              | USD               |
| ETH              | ETH               |


**API Endpoint**: `POST /v1/payouts`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.payouts.create({
  data: {
    amount: { amount: "3.14", currency: types.MoneyCurrencyEnum.Btc },
    destination: {
      id: "b8627ae8-732b-4d25-b947-1df8f4007a29",
      type: types.CryptoPayoutDestinationTypeEnum.AddressBook,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    source: {
      id: "12345",
      identities: [
        {
          addresses: [
            {
              city: "Boston",
              country: "US",
              district: "MA",
              line1: "100 Money Street",
              line2: "Suite 1",
              postalCode: "01234",
            },
          ],
          name: "Satoshi Nakamoto",
          type: types.IdentityTypeEnum.Business,
        },
      ],
      type: types.TransferSourceWalletLocationTypeEnum.Wallet,
    },
    toAmount: { currency: types.ToAmountCurrencyEnum.Btc },
  },
});
```

    
### Create a transfer
A transfer can be made from an existing funded wallet to a blockchain address or another wallet.

**API Endpoint**: `POST /v1/transfers`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.transfers.create({
  data: {
    amount: { amount: "3.14", currency: types.MoneyCurrencyEnum.Usd },
    destination: {
      address: "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
      chain: types.ChainEnum.Algo,
      type: types.TransferRequestBlockchainLocationTypeEnum.Blockchain,
    },
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    source: {
      id: "12345",
      type: types.TransferRequestSourceWalletLocationTypeEnum.Wallet,
    },
  },
});
```

    
### Create a wallet
Creates an end user wallet.

**API Endpoint**: `POST /v1/wallets`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.wallets.create({
  data: {
    description: "Treasury Wallet",
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
  },
});
```

    
### Create a blockchain address
Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you're requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.


**API Endpoint**: `POST /v1/wallets/{walletId}/addresses`


#### Example Snippet

```typescript
import Client, { types } from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.wallets.addresses.create({
  walletId: "0123456789",
  data: {
    chain: types.ChainEnum.Algo,
    currency: types.CurrencyEnum.Btc,
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
  },
});
```

    
### Update a card


**API Endpoint**: `PUT /v1/cards/{id}`


#### Example Snippet

```typescript
import Client from "@circle/all_apis";

const client = new Client({ token: process.env["API_TOKEN"]!! });

const res = await client.v1.cards.put({
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
```

    