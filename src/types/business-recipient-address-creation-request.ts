import { types } from "@circle/all_apis";

export type BusinessRecipientAddressCreationRequest = {
  address: string;
  addressTag?: string | null;
  chain: types.ChainEnum;
  currency?: types.CurrencyEnum | null;
  description: string;
  idempotencyKey: string;
};
