export type AddressBookRecipientMetadata = {
  /**
   * Blockchain Name Service (e.g. ENS) domain for the address.
   */
  bns?: string;
  email?: string;
  /**
   * Nickname related to the address.
   */
  nickname?: string;
};
