import { types } from "@circle/all_apis";

export type WalletLocation = {
  /**
   * The id of the wallet.
   */
  id: string;
  type: types.WalletLocationTypeEnum;
};
