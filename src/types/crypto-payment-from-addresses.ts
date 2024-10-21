import { types } from "@circle/all_apis";

export type CryptoPaymentFromAddresses = {
  addresses?: string[];
  chain?: types.ChainEnum;
};
