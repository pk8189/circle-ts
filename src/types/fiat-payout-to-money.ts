import { types } from "@circle/all_apis";

export type FiatPayoutToMoney = {
  /**
   * Magnitude of the amount, in units of the currency, with a &#x60;.&#x60;.
   */
  amount?: string;
  currency: types.FiatCurrencyEnum;
};
