import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";

export class PublicClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Retrieves an RSA public key to be used in encrypting data sent to the API. Your public keys change infrequently, so we encourage you to cache this response value locally for a duration of 24 hours or more.
   */
  list(opts?: RequestOptions): ApiPromise<types.GetV1EncryptionPublicResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/encryption/public",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
