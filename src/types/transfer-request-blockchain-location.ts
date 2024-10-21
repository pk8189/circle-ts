import { types } from "@circle/all_apis";

export type TransferRequestBlockchainLocation = {
  /**
   * The blockchain address.
   */
  address: string;
  addressTag?: string | null;
  chain: types.ChainEnum;
  type: types.TransferRequestBlockchainLocationTypeEnum;
};
