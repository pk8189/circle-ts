import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/deposits/request-types";
import qs from "qs";

export class DepositsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Searches for deposits sent to your business account. If the date parameters are omitted, returns the most recent deposits. This endpoint returns up to 50 deposits in descending chronological order or pageSize, if provided.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountDepositsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/businessAccount/deposits",
      auth: ["bearerAuth"],
      query: [
        qs.stringify({ from: request.from }),
        qs.stringify({ pageAfter: request.pageAfter }),
        qs.stringify({ pageBefore: request.pageBefore }),
        qs.stringify({ pageSize: request.pageSize }),
        qs.stringify({ to: request.to }),
        qs.stringify({ type: request.typeQuery }),
      ],
      responseType: "json",
      opts,
    });
  }
}
