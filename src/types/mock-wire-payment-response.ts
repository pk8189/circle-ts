import { types } from "@circle/all_apis";

export type MockWirePaymentResponse = {
  amount?: types.FiatMoneyUsd;
  beneficiaryBank?: types.MockWirePaymentBeneficiaryBankInstruction;
  /**
   * Enumerated status of the wire payment. Status &#x60;pending&#x60; indicates that the wire payment is in process; &#x60;processed&#x60; indicates it finished successfully; &#x60;failed&#x60; indicates it failed.
   */
  status?: types.MockWirePaymentResponseStatusEnum;
  /**
   * Wire tracking reference that needs to be set in the wire reference to beneficiary field. This field is retrievable through the response during wire creation or via the bank instruction endpoint.
   */
  trackingRef?: string;
};
