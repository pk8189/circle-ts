import { types } from "@circle/all_apis";

export type PaymentIntentFees1 = {
  /**
   * Magnitude of the amount, in units of the currency, with a &#x60;.&#x60;.
   */
  amount: string;
  /**
   * Currency code.
   */
  currency: types.PaymentIntentFeesCurrencyEnum;
  type: types.PaymentIntentFeesTypeEnum;
};
