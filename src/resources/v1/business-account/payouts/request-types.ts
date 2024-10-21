import { types } from "@circle/all_apis";

export type ListRequest = {
  destination?: string;
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  status?: types.PayoutStatusEnum[];
  to?: string;
  typeQuery?: types.GetV1BusinessAccountPayoutsTypeEnum;
};

export type GetRequest = {
  id: string;
};

export type CreateRequest = {
  data: types.BusinessPayoutCreationRequest;
};
