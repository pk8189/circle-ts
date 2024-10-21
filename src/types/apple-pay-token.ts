import { types } from "@circle/all_apis";

export type ApplePayToken = {
  /**
   * Encrypted payment data. Base64 encoded as a string.
   */
  data: string;
  /**
   * Additional version-dependent information used to decrypt and verify the payment.
   */
  header: types.ApplePayTokenEcHeader | types.ApplePayTokenRsaHeader;
  /**
   * Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm.
   */
  signature: string;
  /**
   * ApplePay token version information.
   */
  version: types.ApplePayTokenVersionEnum;
};
