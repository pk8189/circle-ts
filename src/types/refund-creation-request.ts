import { types } from "@circle/all_apis";

export type RefundCreationRequest = {
  amount: types.FiatMoneyUsd;
  idempotencyKey: string;
  reason?: types.ReversalReasonEnum;
};
