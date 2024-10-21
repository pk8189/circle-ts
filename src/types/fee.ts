import { types } from "@circle/all_apis";

export type Fee = {
  /**
   * Magnitude of the fee amount, in units of the currency, with a &#x60;.&#x60;.
   */
  amount: string;
  /**
   * Currency code for the amount.
   */
  currency: types.FeeCurrencyEnum;
  /**
   * Category of the fee.
   */
  type: types.FeeTypeEnum;
};
