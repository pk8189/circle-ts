import { types } from "@circle/all_apis";

export type PaymentMethodBlockchain = {
  address?: string;
  chain: types.ChainEnum;
  type: types.PaymentMethodBlockchainTypeEnum;
};
