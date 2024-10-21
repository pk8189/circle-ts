import { types } from "@circle/all_apis";

export type BusinessPayout = {
  adjustments?: types.FinalAdjustments | null;
  amount?: types.FiatMoney;
  createDate?: string;
  destination?: types.BankDestination;
  errorCode?: types.PayoutErrorCodeEnum | null;
  fees?: types.FiatMoneyUsd;
  id?: string;
  return?: types.UnwithdrawalObject | null;
  riskEvaluation?: types.RiskEvaluation | null;
  /**
   * The identifier of the source wallet used to fund a payout.
   */
  sourceWalletId?: string;
  status?: types.PayoutStatusEnum;
  toAmount?: types.FiatPayoutToMoney;
  /**
   * A payout tracking reference. Will be present once known.
   */
  trackingRef?: any;
  updateDate?: string;
};
