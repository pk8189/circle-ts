export type MockChargebackCreationRequest = {
  /**
   * The id of the payment to be charged back.  Each payment can only be charged back once.
   */
  paymentId: string;
};
