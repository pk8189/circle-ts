import { types } from "@circle/all_apis";

export type PaymentToken = {
  cardDetails: types.TokenizedCardDetails;
  createDate: string;
  /**
   * Datetime when the digital token expires. ISO-8601.
   */
  expiresOn: string;
  /**
   * Unique system generated identifier for the digital wallet token.
   */
  id: string;
  /**
   * Type of the digital wallet token.
   */
  type: types.PaymentTokenTypeEnum;
  updateDate: string;
};
