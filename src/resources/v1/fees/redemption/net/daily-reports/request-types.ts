import { types } from "@circle/all_apis";

export type ListRequest = {
  currency?: types.GetV1FeesRedemptionNetDailyReportsCurrencyEnum;
  from?: string;
  minimumFeeAmount?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  to?: string;
};
