import { types } from "@circle/all_apis";

export type WireInstruction = {
  beneficiary?: types.WireInstructionBeneficiary;
  beneficiaryBank?: types.WireInstructionBeneficiaryBank;
  /**
   * Circle tracking reference that needs to be set in the wire reference field.
   */
  trackingRef?: string;
};
