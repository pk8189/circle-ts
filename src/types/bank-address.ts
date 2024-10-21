export type BankAddress = {
  /**
   * Name of the bank. This property is required for bank accounts outside of the US that do not support IBAN&#x27;
   */
  bankName?: string;
  /**
   * City portion of the address. This property is required for bank accounts outside of the US.
   */
  city?: string;
  /**
   * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
   */
  country: string;
  /**
   * State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.
   */
  district?: string;
  /**
   * Line one of the street address.
   */
  line1?: string;
  /**
   * Line two of the street address.
   */
  line2?: string;
};
