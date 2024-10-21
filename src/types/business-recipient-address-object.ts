import { types } from "@circle/all_apis";

export type BusinessRecipientAddressObject = {
  address?: string;
  addressTag?: string | null;
  chain?: types.ChainEnum;
  currency?: types.CurrencyEnum | null;
  description?: string;
  id?: string;
  status?: types.BusinessRecipientAddressObjectStatusEnum;
};
