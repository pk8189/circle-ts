import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { PublicClient } from "@circle/all_apis/resources/v1/encryption/public";

export class EncryptionClient extends CoreResourceClient {
  pub: PublicClient;

  constructor(client: CoreClient) {
    super(client);

    this.pub = new PublicClient(this._client);
  }
}
