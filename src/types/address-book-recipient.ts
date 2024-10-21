import { types } from "@circle/all_apis";

export type AddressBookRecipient = {
  address: string;
  addressTag?: string | null;
  chain: types.ChainEnum;
  createDate?: string;
  id?: string;
  metadata: types.AddressBookRecipientMetadata;
  /**
   * Status of the address book recipient.
   */
  status?: types.AddressBookRecipientStatusEnum;
  updateDate?: string;
};
