import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { AddressBookClient } from "@circle/all_apis/resources/v1/address-book";
import { BalancesClient } from "@circle/all_apis/resources/v1/balances";
import { BusinessAccountClient } from "@circle/all_apis/resources/v1/business-account";
import { CardsClient } from "@circle/all_apis/resources/v1/cards";
import { ChannelsClient } from "@circle/all_apis/resources/v1/channels";
import { ChargebacksClient } from "@circle/all_apis/resources/v1/chargebacks";
import { CheckoutSessionsClient } from "@circle/all_apis/resources/v1/checkout-sessions";
import { ConfigurationClient } from "@circle/all_apis/resources/v1/configuration";
import { EncryptionClient } from "@circle/all_apis/resources/v1/encryption";
import { ExchangeClient } from "@circle/all_apis/resources/v1/exchange";
import { FeesClient } from "@circle/all_apis/resources/v1/fees";
import { MocksClient } from "@circle/all_apis/resources/v1/mocks";
import { NotificationsClient } from "@circle/all_apis/resources/v1/notifications";
import { PaymentIntentsClient } from "@circle/all_apis/resources/v1/payment-intents";
import { PaymentTokensClient } from "@circle/all_apis/resources/v1/payment-tokens";
import { PaymentsClient } from "@circle/all_apis/resources/v1/payments";
import { PayoutsClient } from "@circle/all_apis/resources/v1/payouts";
import { SettlementsClient } from "@circle/all_apis/resources/v1/settlements";
import { StablecoinsClient } from "@circle/all_apis/resources/v1/stablecoins";
import { TransfersClient } from "@circle/all_apis/resources/v1/transfers";
import { WalletsClient } from "@circle/all_apis/resources/v1/wallets";

export class V1Client extends CoreResourceClient {
  addressBook: AddressBookClient;
  businessAccount: BusinessAccountClient;
  notifications: NotificationsClient;
  balances: BalancesClient;
  cards: CardsClient;
  channels: ChannelsClient;
  chargebacks: ChargebacksClient;
  checkoutSessions: CheckoutSessionsClient;
  configuration: ConfigurationClient;
  encryption: EncryptionClient;
  exchange: ExchangeClient;
  fees: FeesClient;
  paymentIntents: PaymentIntentsClient;
  payments: PaymentsClient;
  payouts: PayoutsClient;
  settlements: SettlementsClient;
  stablecoins: StablecoinsClient;
  transfers: TransfersClient;
  wallets: WalletsClient;
  mocks: MocksClient;
  paymentTokens: PaymentTokensClient;

  constructor(client: CoreClient) {
    super(client);

    this.addressBook = new AddressBookClient(this._client);
    this.businessAccount = new BusinessAccountClient(this._client);
    this.notifications = new NotificationsClient(this._client);
    this.balances = new BalancesClient(this._client);
    this.cards = new CardsClient(this._client);
    this.channels = new ChannelsClient(this._client);
    this.chargebacks = new ChargebacksClient(this._client);
    this.checkoutSessions = new CheckoutSessionsClient(this._client);
    this.configuration = new ConfigurationClient(this._client);
    this.encryption = new EncryptionClient(this._client);
    this.exchange = new ExchangeClient(this._client);
    this.fees = new FeesClient(this._client);
    this.paymentIntents = new PaymentIntentsClient(this._client);
    this.payments = new PaymentsClient(this._client);
    this.payouts = new PayoutsClient(this._client);
    this.settlements = new SettlementsClient(this._client);
    this.stablecoins = new StablecoinsClient(this._client);
    this.transfers = new TransfersClient(this._client);
    this.wallets = new WalletsClient(this._client);
    this.mocks = new MocksClient(this._client);
    this.paymentTokens = new PaymentTokensClient(this._client);
  }
}
