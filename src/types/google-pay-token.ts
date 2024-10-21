export type GooglePayToken = {
  /**
   * Identifies which encryption/signing scheme created this message. In this way, the protocol can evolve over time if needed. If it is not set, assume ECv0.
   */
  protocolVersion: string;
  /**
   * Verifies the message came from Google. The signature is created using ECDSA.
   */
  signature: string;
  /**
   * A serialized JSON string containing the encryptedMessage, ephemeralPublicKey, and tag. To simplify the signature verification process, this value is serialized.
   */
  signedMessage: string;
};
