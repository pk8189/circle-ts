import { types } from "@circle/all_apis";

export type TokenizedCardDetails = {
  /**
   * The bank identification number (BIN), the first 6 digits of the card.
   */
  bin: string;
  /**
   * The card&#x27;s expiration month.
   */
  expMonth: number;
  /**
   * Four digit number representing the card&#x27;s expiration year.
   */
  expYear: number;
  /**
   * The funding type of the card.
   */
  fundingType?: types.TokenizedCardDetailsFundingTypeEnum;
  /**
   * The country code of the issuer bank. Follows the ISO 3166-1 alpha-2 standard.
   */
  issuerCountry?: string;
  /**
   * The last 4 digits of the card.
   */
  last4: string;
  /**
   * The network of the card.
   */
  network?: types.TokenizedCardDetailsNetworkEnum;
};
