import { types } from "@circle/all_apis";

export type BurnFeePaymentAmount = {
  /**
   * Sum of all push payments received, in units of the currency, with a &#x60;.&#x60;.
   */
  amount: string;
  currency: types.FiatCurrencyEnum;
};
