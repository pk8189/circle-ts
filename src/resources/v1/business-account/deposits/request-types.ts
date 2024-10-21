import { types } from "@circle/all_apis";

export type ListRequest = {
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  to?: string;
  typeQuery?: types.GetV1BusinessAccountDepositsTypeEnum;
};
