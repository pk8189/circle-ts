import { types } from "@circle/all_apis";

export type AddressBookRecipientRequest = {
  address: string;
  addressTag?: string | null;
  chain: types.ChainEnum;
  idempotencyKey: string;
  metadata: types.AddressBookRecipientMetadata;
};
