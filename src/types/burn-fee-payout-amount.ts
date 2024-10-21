import { types } from "@circle/all_apis";

export type BurnFeePayoutAmount = {
  /**
   * Sum of all initiated payouts, in units of the currency, with a &#x60;.&#x60;.
   */
  amount: string;
  currency: types.FiatCurrencyEnum;
};
