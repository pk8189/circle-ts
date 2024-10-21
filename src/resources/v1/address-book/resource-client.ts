import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { RecipientsClient } from "@circle/all_apis/resources/v1/address-book/recipients";

export class AddressBookClient extends CoreResourceClient {
  recipients: RecipientsClient;

  constructor(client: CoreClient) {
    super(client);

    this.recipients = new RecipientsClient(this._client);
  }
}
