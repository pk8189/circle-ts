import { types } from "@circle/all_apis";

export type MockWirePaymentRequest = {
  amount: types.FiatMoneyUsd;
  beneficiaryBank: types.MockWirePaymentBeneficiaryBankInstruction;
  /**
   * Wire tracking reference that needs to be set in the wire reference to beneficiary field. This field is retrievable through the response during wire creation or via the bank instruction endpoint.
   */
  trackingRef: string;
};
