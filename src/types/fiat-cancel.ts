import { types } from "@circle/all_apis";

export type FiatCancel = {
  amount: types.FiatMoneyUsd;
  channel?: string;
  createDate?: string;
  /**
   * Enumerated description of the payment.
   */
  description?: types.FiatCancelDescriptionEnum;
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
  type: types.FiatCancelTypeEnum;
  updateDate?: string;
};
