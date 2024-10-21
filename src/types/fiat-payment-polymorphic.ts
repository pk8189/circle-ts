import { types } from "@circle/all_apis";

export type FiatPaymentPolymorphic = {
  amount: types.FiatMoneyUsd;
  cancel?: types.FiatCancel | null;
  channel?: string;
  createDate?: string;
  /**
   * Enumerated description of the payment.
   */
  description?: types.FiatPaymentPolymorphicDescriptionEnum;
  errorCode?: types.PaymentErrorCodeEnum | null;
  externalRef?: string;
  fees?: types.FiatMoneyUsd;
  fromAmount?: types.FiatMoney;
  id: string;
  merchantId: string;
  merchantWalletId?: string;
  metadata?: types.MetadataPhoneEmail;
  originalPayment?: types.FiatPayment;
  refunds?: types.FiatRefund[] | null;
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
  type: types.FiatPaymentPolymorphicTypeEnum;
  updateDate?: string;
  verification?: types.PaymentVerificationResponse;
};
