import { types } from "@circle/all_apis";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@circle/all_apis/core";
import * as requests from "@circle/all_apis/resources/v1/notifications/subscriptions/request-types";

export class SubscriptionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Subscribe to receiving notifications at a given endpoint. The endpoint should be able to handle AWS SNS subscription requests. For more details see https://docs.aws.amazon.com/mobile/sdkforxamarin/developerguide/sns-send-http.html. Note, the sandbox environment allows a maximum of 3 active subscriptions; otherwise, this is limited to 1 active subscription and subsequent create requests will be rejected with a Limit Exceeded error.
   *
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PostV1NotificationsSubscriptionsResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/notifications/subscriptions",
      auth: ["bearerAuth"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Retrieve a list of existing notification subscriptions with details.
   */
  list(
    opts?: RequestOptions,
  ): ApiPromise<types.GetV1NotificationsSubscriptionsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/notifications/subscriptions",
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
  /**
   * To remove a subscription, all its subscription requests' statuses must be either 'confirmed', 'deleted' or a combination of those. A subscription with at least one 'pending' subscription request cannot be removed.
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeleteV1NotificationsSubscriptionsIdResponse> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/notifications/subscriptions/${request.id}`,
      auth: ["bearerAuth"],
      responseType: "json",
      opts,
    });
  }
}
