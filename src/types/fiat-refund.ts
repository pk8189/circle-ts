import { types } from "@circle/all_apis";

export type FiatRefund = {
  amount: types.FiatMoneyUsd;
  cancel?: types.PaymentInfoCancel | null;
  channel?: string;
  createDate?: string;
  /**
   * Enumerated description of the payment.
   */
  description?: types.FiatRefundDescriptionEnum;
  fees?: types.FiatMoneyUsd;
  id: string;
  merchantId: string;
  merchantWalletId?: string;
  originalPayment?: types.PaymentInfoPaymentAndRefund;
  source: types.SourceResponse;
  status: types.CancelRefundReversalStatusEnum;
  /**
   * Type of the payment object.
   */
  type: types.FiatRefundTypeEnum;
  updateDate?: string;
};
