import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { ChargebacksClient } from "@circle/all_apis/resources/v1/mocks/cards/chargebacks";

export class CardsClient extends CoreResourceClient {
  chargebacks: ChargebacksClient;

  constructor(client: CoreClient) {
    super(client);

    this.chargebacks = new ChargebacksClient(this._client);
  }
}
