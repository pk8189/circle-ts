import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { BalancesClient } from "@circle/all_apis/resources/v1/business-account/balances";
import { BanksClient } from "@circle/all_apis/resources/v1/business-account/banks";
import { DepositsClient } from "@circle/all_apis/resources/v1/business-account/deposits";
import { PayoutsClient } from "@circle/all_apis/resources/v1/business-account/payouts";
import { TransfersClient } from "@circle/all_apis/resources/v1/business-account/transfers";
import { WalletsClient } from "@circle/all_apis/resources/v1/business-account/wallets";

export class BusinessAccountClient extends CoreResourceClient {
  wallets: WalletsClient;
  balances: BalancesClient;
  banks: BanksClient;
  deposits: DepositsClient;
  payouts: PayoutsClient;
  transfers: TransfersClient;

  constructor(client: CoreClient) {
    super(client);

    this.wallets = new WalletsClient(this._client);
    this.balances = new BalancesClient(this._client);
    this.banks = new BanksClient(this._client);
    this.deposits = new DepositsClient(this._client);
    this.payouts = new PayoutsClient(this._client);
    this.transfers = new TransfersClient(this._client);
  }
}
