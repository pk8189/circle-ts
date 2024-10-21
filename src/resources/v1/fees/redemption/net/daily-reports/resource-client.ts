import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/fees/redemption/net/daily-reports/request-types";
import qs from "qs";

export class DailyReportsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Searches for NET burn fee daily calculations. This endpoint returns up to 50 daily fee amount calculations in descending chronological order or pageSize, if provided.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1FeesRedemptionNetDailyReportsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/fees/redemption/net/dailyReports",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ currency: request.currency }),
        qs.stringify({ from: request.from }),
        qs.stringify({ minimumFeeAmount: request.minimumFeeAmount }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ to: request.to }),
      ],
      responseType: "json",
      opts,
    });
  }
}
