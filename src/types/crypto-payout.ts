import { types } from "@circle/all_apis";

export type CryptoPayout = {
  amount?: types.PayoutMoney;
  createDate?: string;
  destination?: types.CryptoPayoutDestination;
  errorCode?: types.PayoutErrorCodeEnum | null;
  fees?: types.PayoutMoney;
  id?: string;
  networkFees?: types.PayoutMoney;
  riskEvaluation?: types.RiskEvaluation | null;
  /**
   * The identifier of the source wallet used to fund a payout.
   */
  sourceWalletId?: string;
  status?: types.PayoutStatusEnum;
  toAmount?: types.PayoutMoney;
  updateDate?: string;
};
