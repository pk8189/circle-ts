import { types } from "@circle/all_apis";

export type CardCreationRequest = {
  billingDetails: types.BillingDetails;
  /**
   * PGP encrypted base64 encoded string. Contains Number and CVV.
   * * **Number**: Card number. No spaces or other separators. REQUIRED
   * * **CVV (Card Verification Number)**: Three or four digit security code. REQUIRED&#x27;
   *
   */
  encryptedData: string;
  expMonth: number;
  expYear: number;
  idempotencyKey: string;
  keyId?: string;
  metadata: types.MetadataCardAndAch;
};
