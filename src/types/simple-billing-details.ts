export type SimpleBillingDetails = {
  /**
   * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
   */
  country: string;
  /**
   * State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.
   */
  district: string;
};
