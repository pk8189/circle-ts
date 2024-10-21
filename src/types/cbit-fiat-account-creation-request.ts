export type CbitFiatAccountCreationRequest = {
  idempotencyKey: string;
  /**
   * CBIT wallet address.
   */
  walletAddress: string;
};
