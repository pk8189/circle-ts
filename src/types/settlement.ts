import { types } from "@circle/all_apis";

export type Settlement = {
  chargebackFees?: types.FiatMoneyUsd;
  createDate?: string;
  id?: string;
  merchantWalletId?: string;
  paymentFees?: types.FiatMoneyUsd;
  totalCredits?: types.FiatMoneyUsd;
  totalDebits?: types.FiatMoneyUsd;
  updateDate?: string;
  /**
   * If this settlement was used for a marketplace payment, the wallet involved in the settlement. Not included for standard merchant settlements.
   */
  walletId?: string;
};
