import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/business-account/banks/pix/instructions/request-types";

export class InstructionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get the PIX transfer instructions into the Circle bank account given your bank account id.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1BusinessAccountBanksPixIdInstructionsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/businessAccount/banks/pix/${request.id}/instructions`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
