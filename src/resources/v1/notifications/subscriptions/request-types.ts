import { types } from "@circle/all_apis";

export type DeleteRequest = {
  id: string;
};

export type CreateRequest = {
  data: types.SubscriptionRequest;
};
