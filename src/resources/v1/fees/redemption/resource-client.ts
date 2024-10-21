import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { NetClient } from "@circle/all_apis/resources/v1/fees/redemption/net";

export class RedemptionClient extends CoreResourceClient {
  net: NetClient;

  constructor(client: CoreClient) {
    super(client);

    this.net = new NetClient(this._client);
  }
}
