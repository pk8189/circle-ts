import { types } from "@circle/all_apis";

export type ContinuousPaymentIntentCreationRequest = {
  /**
   * Desired currency for the payment
   */
  currency: types.ContinuousPaymentIntentCreationRequestCurrencyEnum;
  idempotencyKey: string;
  merchantWalletId?: string;
  paymentMethods: types.PaymentMethodBlockchain[];
  /**
   * Desired currency for the payments to settle in.
   */
  settlementCurrency: types.ContinuousPaymentIntentCreationRequestSettlementCurrencyEnum;
  type?: types.ContinuousPaymentIntentCreationRequestTypeEnum;
};
