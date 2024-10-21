import { types } from "@circle/all_apis";

export type CryptoRefundDestination = {
  /**
   * The blockchain address.
   */
  address: string;
  addressTag?: string | null;
  chain: types.ChainEnum;
};
