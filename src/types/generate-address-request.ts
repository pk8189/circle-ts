import { types } from "@circle/all_apis";

export type GenerateAddressRequest = {
  chain: types.ChainEnum;
  currency?: types.CurrencyEnum | null;
  idempotencyKey: string;
};
