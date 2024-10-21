import { types } from "@circle/all_apis";

export type TransferSourceWalletLocation = {
  /**
   * The id of the wallet.
   */
  id: string;
  identities?: types.Identity[];
  type: types.TransferSourceWalletLocationTypeEnum;
};
