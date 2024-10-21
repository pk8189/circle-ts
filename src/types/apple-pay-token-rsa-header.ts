export type ApplePayTokenRsaHeader = {
  /**
   * Optional. Hash of the applicationData property of the original PKPaymentRequest object. If the value of that property is null, this key is omitted.
   */
  applicationData?: string;
  /**
   * Hash of the X.509 encoded public key bytes of the merchant’s certificate.
   */
  publicKeyHash: string;
  /**
   * Transaction identifier, generated on the device.
   */
  transactionId: string;
  /**
   * The symmetric key wrapped using your RSA public key.
   */
  wrappedKey: string;
};
