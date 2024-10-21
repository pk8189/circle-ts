import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { CbitClient } from "@circle/all_apis/resources/v1/business-account/banks/cbit";
import { PixClient } from "@circle/all_apis/resources/v1/business-account/banks/pix";
import { WiresClient } from "@circle/all_apis/resources/v1/business-account/banks/wires";

export class BanksClient extends CoreResourceClient {
  cbit: CbitClient;
  pix: PixClient;
  wires: WiresClient;

  constructor(client: CoreClient) {
    super(client);

    this.cbit = new CbitClient(this._client);
    this.pix = new PixClient(this._client);
    this.wires = new WiresClient(this._client);
  }
}
