export type UpdateBillingDetails = {
  /**
   * City portion of the address.
   */
  city?: string;
  /**
   * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
   */
  country?: string;
  /**
   * State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.
   */
  district?: string;
  email?: string;
  /**
   * First name of the card or bank account holder.
   */
  firstName?: string;
  /**
   * Last name of the card or bank account holder.
   */
  lastName?: string;
  /**
   * Line one of the street address.
   */
  line1?: string;
  /**
   * Line two of the street address.
   */
  line2?: string;
  phone?: string;
  /**
   * Postal / ZIP code of the address.
   */
  postalCode?: string;
};
