import { types } from "@circle/all_apis";

export type CryptoRefundCreationRequest = {
  /**
   * The source amount of the refund, it can be in either the original payment currency or the settlement currency.
   */
  amount: types.CryptoRefundCreationRequestAmount;
  destination: types.CryptoRefundDestination;
  idempotencyKey: string;
  /**
   * The destination amount of the refund, it must be in the original payment currency.
   */
  toAmount: types.CryptoRefundCreationRequestToAmount;
};
