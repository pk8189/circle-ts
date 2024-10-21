import { types } from "@circle/all_apis";

export type PaymentIntent = {
  amount: types.CryptoPaymentsMoney;
  amountPaid?: types.CryptoPaymentsMoney;
  amountRefunded?: types.CryptoPaymentsMoney;
  createDate?: string;
  expiresOn?: string;
  fees?: types.PaymentIntentFees1[];
  /**
   * Unique system generated identifier for the entity.
   */
  id?: string;
  merchantWalletId?: string;
  /**
   * List of associated payments.
   */
  paymentIds?: string[];
  paymentMethods: types.PaymentMethodBlockchain[];
  /**
   * List of associated refunds.
   */
  refundIds?: string[];
  /**
   * Desired currency for the payments to settle in.
   */
  settlementCurrency: types.PaymentIntentSettlementCurrencyEnum;
  /**
   * State management timeline.
   */
  timeline?: types.Timeline[];
  updateDate?: string;
};
