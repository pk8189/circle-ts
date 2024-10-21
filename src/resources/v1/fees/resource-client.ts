import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { RedemptionClient } from "@circle/all_apis/resources/v1/fees/redemption";

export class FeesClient extends CoreResourceClient {
  redemption: RedemptionClient;

  constructor(client: CoreClient) {
    super(client);

    this.redemption = new RedemptionClient(this._client);
  }
}
