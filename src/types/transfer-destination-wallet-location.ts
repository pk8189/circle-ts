import { types } from "@circle/all_apis";

export type TransferDestinationWalletLocation = {
  /**
   * An alphanumeric string which indicates the wallet address used to receive the transfer. Will only be set when the transfer source is a blockchain address.
   */
  address?: string;
  addressTag?: string | null;
  /**
   * The id of the wallet.
   */
  id: string;
  type: types.TransferDestinationWalletLocationTypeEnum;
};
