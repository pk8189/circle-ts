import { types } from "@circle/all_apis";

export type MetadataCryptoPayment = {
  /**
   * meta transaction nonce
   */
  metaTxNonce: string;
  /**
   * Raw signature coming from the wallet response
   */
  rawSignature: string;
  /**
   * This comes from the /presign response
   */
  signatureValidAfter: string;
  /**
   * This comes from the /presign response
   */
  signatureValidBefore: string;
  /**
   * The protocol type. so far we only support &quot;TransferWithAuthorization&quot;. find more details in EIP-3009
   */
  type: types.MetadataCryptoPaymentTypeEnum;
};
