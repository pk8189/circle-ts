export type WalletCreationRequest = {
  /**
   * A human-friendly, non-unique identifier for a wallet.
   */
  description?: string;
  idempotencyKey: string;
};
