import { types } from "@circle/all_apis";

export type Card = {
  billingDetails: types.BillingDetails;
  /**
   * The bank identification number (BIN), the first 6 digits of the card.
   */
  bin?: string;
  createDate: string;
  errorCode?: types.VerificationErrorCodeEnum | null;
  expMonth: number;
  expYear: number;
  fingerprint: string;
  /**
   * The funding type of the card. Possible values are &#x60;credit&#x60;, &#x60;debit&#x60;, &#x60;prepaid&#x60;, and &#x60;unknown&#x60;.
   */
  fundingType?: types.CardFundingTypeEnum;
  id: string;
  /**
   * The country code of the issuer bank. Follows the ISO 3166-1 alpha-2 standard.
   */
  issuerCountry?: string;
  /**
   * The last 4 digits of the card.
   */
  last4: string;
  metadata: types.MetadataPhoneEmail;
  /**
   * The network of the card.
   */
  network: types.CardNetworkEnum;
  riskEvaluation?: types.RiskEvaluation | null;
  status: types.ExternalFiatAccountStatusEnum;
  updateDate: string;
  verification: types.CardVerificationResponse;
};
