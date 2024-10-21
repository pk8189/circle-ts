import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { AddressesClient } from "@circle/all_apis/resources/v1/business-account/wallets/addresses";

export class WalletsClient extends CoreResourceClient {
  addresses: AddressesClient;

  constructor(client: CoreClient) {
    super(client);

    this.addresses = new AddressesClient(this._client);
  }
}
