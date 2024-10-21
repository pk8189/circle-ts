import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/banks/cbit/instructions/request-types";

export class InstructionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get the CBIT transfer instructions into the Circle bank account given your bank account id.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksCbitIdInstructionsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/banks/cbit/${request.id}/instructions`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
