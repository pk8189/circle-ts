import { types } from "@circle/all_apis";

export type FiatOptionalAmountMoney = {
  /**
   * Magnitude of the amount, in units of the currency, with a &#x60;.&#x60;.
   */
  amount?: string;
  currency: types.FiatCurrencyEnum;
};
