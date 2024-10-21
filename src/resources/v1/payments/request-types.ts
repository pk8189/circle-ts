import { types } from "@circle/all_apis";

export type ListRequest = {
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  paymentIntentId?: string;
  settlementId?: string;
  source?: string;
  status?: types.GetV1PaymentsStatusEnum;
  to?: string;
  typeQuery?: types.GetV1PaymentsTypeItemEnum[];
};

export type GetRequest = {
  id: string;
};

export type CreateRequest = {
  data: types.PaymentCreationRequest;
};
