import { types } from "@circle/all_apis";

export type PaymentInfoPaymentAndRefund = {
  amount?: types.FiatMoneyUsd;
  createDate?: string;
  /**
   * Enumerated description of the payment item.
   */
  description?: types.PaymentInfoPaymentAndRefundDescriptionEnum | null;
  fees?: types.FiatMoneyUsd;
  id?: string;
  requiredAction?: types.RequiredAction;
  status?: types.PaymentStatusEnum;
  /**
   * Type of the payment object.
   */
  type?: types.PaymentInfoPaymentAndRefundTypeEnum;
};
