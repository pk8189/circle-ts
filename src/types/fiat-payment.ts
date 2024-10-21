import { types } from "@circle/all_apis";

export type FiatPayment = {
  amount: types.FiatMoneyUsd;
  cancel?: types.PaymentInfoCancel | null;
  captureAmount?: types.FiatMoneyUsd;
  captureDate?: string;
  /**
   * Determines if a payment has successfully been captured. This property is only present for payments that did not use auto capture.
   */
  captured?: boolean;
  channel?: string;
  createDate?: string;
  /**
   * Enumerated description of the payment.
   */
  description?: types.FiatPaymentDescriptionEnum;
  fees?: types.FiatMoneyUsd;
  fromAmount?: types.FiatMoney;
  id: string;
  merchantId: string;
  merchantWalletId?: string;
  refunds?: types.PaymentInfoPaymentAndRefund[];
  requiredAction?: types.RequiredAction;
  source: types.SourceResponse;
  status: types.PaymentStatusEnum;
  /**
   * Type of the payment object.
   */
  type: types.FiatPaymentTypeEnum;
  updateDate?: string;
};
