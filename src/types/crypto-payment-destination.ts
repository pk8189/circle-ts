import { types } from "@circle/all_apis";

export type CryptoPaymentDestination = {
  /**
   * The destination address
   */
  address: string;
  chain: types.CryptoPaymentDestinationChainEnum;
};
