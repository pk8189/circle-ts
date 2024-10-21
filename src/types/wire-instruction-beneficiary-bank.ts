export type WireInstructionBeneficiaryBank = {
  /**
   * Account number of the beneficiary&#x27;s bank account.
   */
  accountNumber?: string;
  /**
   * Address of the beneficiary&#x27;s bank.
   */
  address?: string;
  /**
   * City of the beneficiary&#x27;s bank.
   */
  city?: string;
  /**
   * Country code of the beneficiary&#x27;s bank. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
   */
  country?: string;
  /**
   * Currency of the beneficiary&#x27;s bank account.
   */
  currency?: string;
  /**
   * Name of the beneficiary&#x27;s bank.
   */
  name?: string;
  /**
   * Postal code of the beneficiary&#x27;s bank.
   */
  postalCode?: string;
  /**
   * ABA Routing number of the beneficiary&#x27;s bank account.
   */
  routingNumber?: string;
  /**
   * SWIFT code of the beneficiary&#x27;s bank account.
   */
  swiftCode?: string;
};
