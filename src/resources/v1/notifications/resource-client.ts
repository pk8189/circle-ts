import { CoreClient, CoreResourceClient } from "@circle/all_apis/core";
import { SubscriptionsClient } from "@circle/all_apis/resources/v1/notifications/subscriptions";

export class NotificationsClient extends CoreResourceClient {
  subscriptions: SubscriptionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.subscriptions = new SubscriptionsClient(this._client);
  }
}
