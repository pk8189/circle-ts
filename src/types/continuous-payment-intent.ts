import { types } from "@circle/all_apis";

export type ContinuousPaymentIntent = {
  amountPaid?: types.CryptoPaymentsMoney;
  amountRefunded?: types.CryptoPaymentsMoney;
  createDate?: string;
  /**
   * Desired currency of the payment.
   */
  currency: types.ContinuousPaymentIntentCurrencyEnum;
  fees?: types.PaymentIntentFees1[];
  id?: string;
  merchantWalletId?: string;
  paymentMethods: types.PaymentMethodBlockchain[];
  /**
   * Desired currency for the payments to settle in.
   */
  settlementCurrency: types.ContinuousPaymentIntentSettlementCurrencyEnum;
  /**
   * State management timeline.
   */
  timeline?: types.Timeline[];
  type: types.ContinuousPaymentIntentTypeEnum;
  updateDate?: string;
};
