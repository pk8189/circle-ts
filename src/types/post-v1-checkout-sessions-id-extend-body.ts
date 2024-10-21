export type PostV1CheckoutSessionsIdExtendBody = {
  /**
   * Extend the CheckoutSession by extendTime seconds if it is active or expired. The field is optional, if not provided, extend a period that configured by Merchant (default 1 day)
   */
  extendTime?: number;
};
