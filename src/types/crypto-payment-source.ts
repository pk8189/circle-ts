import { types } from "@circle/all_apis";

export type CryptoPaymentSource = {
  /**
   * The source address
   */
  address: string;
  /**
   * The source type
   */
  type: types.CryptoPaymentSourceTypeEnum;
};
