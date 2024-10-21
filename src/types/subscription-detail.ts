import { types } from "@circle/all_apis";

export type SubscriptionDetail = {
  /**
   * Status of the subscription request.
   */
  status?: types.SubscriptionDetailStatusEnum;
  /**
   * Identifier for created subscription.
   */
  url?: string;
};
