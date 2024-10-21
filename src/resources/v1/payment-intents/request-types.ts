import { types } from "@circle/all_apis";

export type ListRequest = {
  context?: types.GetV1PaymentIntentsContextEnum;
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  status?: types.GetV1PaymentIntentsStatusEnum;
  to?: string;
};

export type GetRequest = {
  id: string;
};

export type CreateRequest = {
  data:
  | types.PaymentIntentCreationRequest
  | types.ContinuousPaymentIntentCreationRequest;
};
