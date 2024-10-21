import { types } from "@circle/all_apis";

export type TransferSourceBlockchainLocation = {
  chain: types.ChainEnum;
  identities?: types.Identity[];
  type: types.TransferSourceBlockchainLocationTypeEnum;
};
