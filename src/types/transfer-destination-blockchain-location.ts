import { types } from "@circle/all_apis";

export type TransferDestinationBlockchainLocation = {
  address: string;
  addressTag?: string | null;
  chain: types.ChainEnum;
  type: types.TransferDestinationBlockchainLocationTypeEnum;
};
