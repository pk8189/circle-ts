import { types } from "@circle/all_apis";

export type SimpleCard = {
  billingDetails: types.SimpleBillingDetails;
  /**
   * The bank identification number (BIN), the first 6 digits of the card.
   */
  bin?: string;
  createDate: string;
  /**
   * Two digit number representing the card&#x27;s expiration month.
   */
  expMonth: number;
  /**
   * Four digit number representing the card&#x27;s expiration year.
   */
  expYear: number;
  fingerprint: string;
  /**
   * The funding type of the card. Possible values are &#x60;credit&#x60;, &#x60;debit&#x60;, &#x60;prepaid&#x60;, and &#x60;unknown&#x60;.
   */
  fundingType?: types.SimpleCardFundingTypeEnum;
  id: string;
  /**
   * The country code of the issuer bank. Follows the ISO 3166-1 alpha-2 standard.
   */
  issuerCountry?: string;
  /**
   * The network of the card.
   */
  network: types.SimpleCardNetworkEnum;
  riskEvaluation?: types.RiskEvaluation | null;
  status: types.ExternalFiatAccountStatusEnum;
  updateDate: string;
  verification: types.CardVerificationResponse;
};
