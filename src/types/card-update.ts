import { types } from "@circle/all_apis";

export type CardUpdate = {
  billingDetails?: types.UpdateBillingDetails;
  /**
   * PGP encrypted base64 encoded string. Contains CVV.
   * * **CVV (Card Verification Number)**: Three or four digit security code. REQUIRED&#x27;
   *
   */
  encryptedData: string;
  expMonth?: number;
  expYear?: number;
  keyId: string;
};
