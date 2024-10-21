import { types } from "@circle/all_apis";

export type RequiredAction = {
  /**
   * The URL to bring the user to in order to complete the payment.
   */
  redirectUrl: string;
  /**
   * The type of action that is required to proceed with the payment. Currently only one type is supported.
   */
  type: types.RequiredActionTypeEnum;
};
