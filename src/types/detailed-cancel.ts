import { types } from "@circle/all_apis";

export type DetailedCancel = {
  amount: types.FiatMoneyUsd;
  createDate?: string;
  /**
   * Enumerated description of the payment.
   */
  description?: types.DetailedCancelDescriptionEnum;
  errorCode?: types.PaymentErrorCodeEnum | null;
  fees?: types.FiatMoneyUsd;
  id: string;
  merchantId: string;
  merchantWalletId?: string;
  metadata?: types.MetadataPhoneEmail;
  originalPayment?: types.FiatPayment;
  /**
   * If the cancel was made after a cutoff time period, it will be processed as a refund. This flag indicates that the cancel was processed as a refund&#x27;
   */
  refund?: boolean;
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
  type: types.DetailedCancelTypeEnum;
  updateDate?: string;
};
