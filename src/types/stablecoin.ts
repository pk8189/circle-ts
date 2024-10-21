import { types } from "@circle/all_apis";

export type Stablecoin = {
  /**
   * A list of the broken down totalAmount by chain of the stablecoin.
   */
  chains?: types.TokenAmount[];
  /**
   * Name of the stablecoin.
   */
  name?: string;
  /**
   * Symbol of the stablecoin.
   */
  symbol?: string;
  /**
   * Total circulating amount of the stablecoin.
   */
  totalAmount?: string;
};
