import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { DailyReportsClient } from "@circle/all_apis/resources/v1/fees/redemption/net/daily-reports";

export class NetClient extends CoreResourceClient {
  dailyReports: DailyReportsClient;

  constructor(client: CoreClient) {
    super(client);

    this.dailyReports = new DailyReportsClient(this._client);
  }
}
