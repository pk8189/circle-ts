import { types } from "@circle/all_apis";

export type BusinessGenerateAddressRequest = {
  chain: types.ChainEnum;
  currency?: types.CurrencyEnum | null;
  idempotencyKey: string;
};
