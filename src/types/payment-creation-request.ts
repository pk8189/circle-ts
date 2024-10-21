import { types } from "@circle/all_apis";

export type PaymentCreationRequest = {
  amount: types.FiatMoneyUsd;
  /**
   * Triggers the automatic capture of the full payment amount. If set to false the payment will only be authorized but not captured.
   */
  autoCapture?: boolean;
  channel?: string;
  /**
   * Description of the payment with length restriction of 240 characters.
   */
  description?: string;
  /**
   * PGP encrypted base64 encoded string. Contains CVV.
   * * **CVV (Card Verification Number)**: Three or four digit security code. Only required if &#x60;verification&#x60; is &#x60;cvv&#x60;.
   *
   */
  encryptedData?: string;
  idempotencyKey: string;
  keyId?: string;
  metadata: types.MetadataPayment;
  source: types.Source;
  /**
   * Indicates the verification method for this payment.
   */
  verification: types.PaymentCreationRequestVerificationEnum;
  /**
   * The URL to redirect users to after failed 3DS authentication.
   */
  verificationFailureUrl?: string;
  /**
   * The URL to redirect users to after successful 3DS authentication.
   */
  verificationSuccessUrl?: string;
};
