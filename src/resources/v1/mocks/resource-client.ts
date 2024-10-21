import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { CardsClient } from "@circle/all_apis/resources/v1/mocks/cards";
import { PaymentsClient } from "@circle/all_apis/resources/v1/mocks/payments";

export class MocksClient extends CoreResourceClient {
  cards: CardsClient;
  payments: PaymentsClient;

  constructor(client: CoreClient) {
    super(client);

    this.cards = new CardsClient(this._client);
    this.payments = new PaymentsClient(this._client);
  }
}
