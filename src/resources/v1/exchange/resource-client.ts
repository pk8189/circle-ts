import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { QuotesClient } from "@circle/all_apis/resources/v1/exchange/quotes";
import { RatesClient } from "@circle/all_apis/resources/v1/exchange/rates";

export class ExchangeClient extends CoreResourceClient {
  rates: RatesClient;
  quotes: QuotesClient;

  constructor(client: CoreClient) {
    super(client);

    this.rates = new RatesClient(this._client);
    this.quotes = new QuotesClient(this._client);
  }
}
