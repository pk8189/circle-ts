import { types } from "@circle/all_apis";

export type ListRequest = {
  endUserAddress: string;
  paymentIntentId: string;
  amount?: string;
  currency?: types.GetV1PaymentsPresignCurrencyEnum;
};
