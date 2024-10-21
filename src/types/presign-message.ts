export type PresignMessage = {
  /**
   * A blockchain address representing payer&#x27;s address
   */
  from: string;
  /**
   * unique nonce
   */
  nonce: string;
  /**
   * A blockchain address representing payee&#x27;s address
   */
  to: string;
  /**
   * the timestamp after which this is valid (unix time)
   */
  validAfter: number;
  /**
   * the timestamp before which this is valid (unix time)
   */
  validBefore: number;
  /**
   * Amount to be transferred
   */
  value: string;
};
