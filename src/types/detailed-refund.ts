import { types } from "@circle/all_apis";

export type DetailedRefund = {
  amount: types.FiatMoneyUsd;
  cancel?: types.FiatCancel | null;
  createDate?: string;
  /**
   * Enumerated description of the payment.
   */
  description?: types.DetailedRefundDescriptionEnum;
  errorCode?: types.PaymentErrorCodeEnum | null;
  fees?: types.FiatMoneyUsd;
  id: string;
  merchantId: string;
  merchantWalletId?: string;
  metadata?: types.MetadataPhoneEmail;
  originalPayment?: types.FiatPayment;
  riskEvaluation?: types.RiskEvaluation | null;
  source: types.SourceResponse;
  status: types.CancelRefundReversalStatusEnum;
  /**
   * Payment tracking reference. Will be present once known.
   */
  trackingRef?: string | null;
  /**
   * Type of the payment object.
   */
  type: types.DetailedRefundTypeEnum;
  updateDate?: string;
};
