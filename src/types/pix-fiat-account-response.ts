import { types } from "@circle/all_apis";

export type PixFiatAccountResponse = {
  createDate: string;
  /**
   * Bank name plus last four digits of the PIX account number.
   */
  description: string;
  fingerprint: string;
  id: string;
  riskEvaluation?: types.RiskEvaluation | null;
  status: types.ExternalFiatAccountStatusEnum;
  /**
   * Wire tracking ref that needs to be set in the wire reference to beneficiary field.
   */
  trackingRef: string;
  /**
   * A &lt;TransferType, TransferTypeInfo&gt; map which shows transfer types supported on this account as well as additional information for each. For PIX accounts this will always only show information for PIX transfers.
   */
  transferTypesInfo: types.PixFiatAccountResponseTransferTypesInfo;
  updateDate: string;
};
