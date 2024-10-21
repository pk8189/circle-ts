import { types } from "@circle/all_apis";

export type NetworkFeeQuote = {
  amount: types.CryptoPaymentsMoney;
  /**
   * The timestamp when the quote will expire at, in ISO-8601 UTC date/time format.
   */
  expiresAt: string;
  /**
   * UUID of network fee quote
   */
  quoteId: string;
};
