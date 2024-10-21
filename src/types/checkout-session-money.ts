import { types } from "@circle/all_apis";

export type CheckoutSessionMoney = {
  /**
   * Magnitude of the amount, in units of the currency, with a &#x60;.&#x60;.
   */
  amount: string;
  /**
   * A currency associated with a balance or address.
   */
  currency: types.CheckoutSessionMoneyCurrencyEnum;
};
