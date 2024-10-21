import { types } from "@circle/all_apis";

export type PaymentTokenRequest = {
  idempotencyKey: string;
  /**
   * The token data
   */
  tokenData: types.ApplePayToken | types.GooglePayToken;
  /**
   * Type of the digital wallet token.
   */
  type: types.PaymentTokenRequestTypeEnum;
};
