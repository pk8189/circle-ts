import { types } from "@circle/all_apis";

export type RedemptionFeeCalculation = {
  /**
   * The create date of the NET burn daily fee calculation.
   */
  createDate?: string;
  cumulatedNetAmount?: types.BurnFeeNetAmount;
  cumulatedPaymentAmount?: types.BurnFeePaymentAmount;
  cumulatedPayoutAmount?: types.BurnFeePayoutAmount;
  fee?: types.FiatMoney;
  id?: string;
  /**
   * Fee collection status
   */
  status?: types.RedemptionFeeCalculationStatusEnum;
  /**
   * Fee calculation reset timestamp.
   */
  thresholdResetTimestamp?: string;
  /**
   * A date representing a day for which a fee is calculated.
   */
  valueDate?: string;
};
