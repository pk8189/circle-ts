import { types } from "@circle/all_apis";

export type AddressObject = {
  address?: string;
  addressTag?: string | null;
  chain?: types.ChainEnum;
  currency?: types.CurrencyEnum | null;
};
