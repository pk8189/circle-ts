import { types } from "@circle/all_apis";

export type PaymentIntentCreationRequest = {
  amount: types.CryptoPaymentsMoney;
  idempotencyKey: string;
  merchantWalletId?: string;
  paymentMethods: types.PaymentMethodBlockchain[];
  /**
   * Desired currency for the payments to settle in.
   */
  settlementCurrency: types.PaymentIntentCreationRequestSettlementCurrencyEnum;
};
