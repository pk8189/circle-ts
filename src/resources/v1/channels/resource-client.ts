import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";

export class ChannelsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Retrieve a list of channels with details (e.g. `cardDescriptor`, `achDescriptor`, etc.).
   */
  list(opts?: RequestOptions): ApiPromise<types.GetV1ChannelsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/channels",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
