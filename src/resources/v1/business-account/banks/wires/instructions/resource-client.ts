import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/banks/wires/instructions/request-types";
import qs from "qs";

export class InstructionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get the wire transfer instructions into the Circle bank account given your bank account id.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksWiresIdInstructionsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/banks/wires/${request.id}/instructions`,
      auth: ["bearerAuth"],
      query: [qs.stringify({ currency: request.currency })],
      responseType: "json",
      opts,
    });
  }
}
