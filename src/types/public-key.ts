export type PublicKey = {
  keyId: string;
  /**
   * A PGP ascii-armor encoded public key.
   */
  publicKey: string;
};
