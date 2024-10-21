import { types } from "@circle/all_apis";

export type SubscriptionResponse = {
  /**
   * URL of the endpoint.
   */
  endpoint?: string;
  id?: string;
  /**
   * List of subscriptions details for created subscriptions.
   */
  subscriptionDetails?: types.SubscriptionDetail[];
};
