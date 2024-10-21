import { types } from "@circle/all_apis";

export type PaymentInfoCancel = {
  createDate?: string;
  /**
   * Enumerated description of the payment item.
   */
  description?: types.PaymentInfoCancelDescriptionEnum | null;
  id?: string;
  status?: types.CancelRefundReversalStatusEnum;
  /**
   * Type of the payment object.
   */
  type?: types.PaymentInfoCancelTypeEnum;
};
