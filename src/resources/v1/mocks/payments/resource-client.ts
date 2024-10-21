import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { WireClient } from "@circle/all_apis/resources/v1/mocks/payments/wire";

export class PaymentsClient extends CoreResourceClient {
  wire: WireClient;

  constructor(client: CoreClient) {
    super(client);

    this.wire = new WireClient(this._client);
  }
}
