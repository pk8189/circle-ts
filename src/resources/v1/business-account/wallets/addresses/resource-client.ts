import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { DepositClient } from "@circle/all_apis/resources/v1/business-account/wallets/addresses/deposit";
import { RecipientClient } from "@circle/all_apis/resources/v1/business-account/wallets/addresses/recipient";

export class AddressesClient extends CoreResourceClient {
  recipient: RecipientClient;
  deposit: DepositClient;

  constructor(client: CoreClient) {
    super(client);

    this.recipient = new RecipientClient(this._client);
    this.deposit = new DepositClient(this._client);
  }
}
