import { types } from "@circle/all_apis";

export type DetailedPayment = {
  amount: types.FiatMoneyUsd;
  cancel?: types.FiatCancel | null;
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
  description?: types.DetailedPaymentDescriptionEnum;
  errorCode?: types.PaymentErrorCodeEnum | null;
  fees?: types.FiatMoneyUsd;
  id: string;
  merchantId: string;
  merchantWalletId?: string;
  metadata?: types.MetadataPhoneEmail;
  refunds?: types.FiatRefund[];
  requiredAction?: types.RequiredAction;
  riskEvaluation?: types.RiskEvaluation | null;
  source: types.SourceResponse;
  status: types.PaymentStatusEnum;
  /**
   * Payment tracking reference. Will be present once known.
   */
  trackingRef?: string | null;
  /**
   * Type of the payment object.
   */
  type: types.DetailedPaymentTypeEnum;
  updateDate?: string;
  verification?: types.PaymentVerificationResponse;
};
