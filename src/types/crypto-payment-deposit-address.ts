import { types } from "@circle/all_apis";

export type CryptoPaymentDepositAddress = {
  address?: string;
  addressTag?: string | null;
  chain?: types.ChainEnum;
};
