import { types } from "@circle/all_apis";

export type BusinessPayoutCreationRequest = {
  amount: types.FiatMoney;
  destination: types.BusinessDestinationRequest;
  idempotencyKey: string;
  toAmount?: types.FiatPayoutToMoney;
};
