import { types } from "@circle/all_apis";

export type PayoutMoney = {
  /**
   * Magnitude of the amount, in units of the currency, with a &#x60;.&#x60;.
   */
  amount: string;
  /**
   * Currency code for the amount.
   */
  currency: types.PayoutMoneyCurrencyEnum;
};
