export type CbitInstruction = {
  /**
   * Circle tracking reference that needs to be set in the CBIT public description field.
   */
  trackingRef?: string;
  /**
   * Circle wallet address that needs to be set in the CBIT recipient wallet field.
   */
  walletAddress?: string;
};
