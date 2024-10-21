import { types } from "@circle/all_apis";

export type BurnFeeNetAmount = {
  /**
   * Sum of all initiated payouts minus sum of all received push payments, in units of the currency, with a &#x60;.&#x60;.
   */
  amount: string;
  currency: types.FiatCurrencyEnum;
};
