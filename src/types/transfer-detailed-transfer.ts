import { types } from "@circle/all_apis";

export type TransferDetailedTransfer = {
  amount: types.Money;
  createDate?: string;
  destination:
  | types.TransferDestinationBlockchainLocation
  | types.TransferDestinationWalletLocation;
  errorCode?: types.TransferErrorCodeEnum | null;
  /**
   * An array of fees applied to a transaction. This is only available when there is at least one non-zero fee.
   */
  fees?: types.Fee[];
  id: string;
  riskEvaluation?: types.RiskEvaluation | null;
  source:
  | types.TransferSourceWalletLocation
  | types.TransferSourceBlockchainLocation;
  /**
   * Status of the transfer. Status &#x60;pending&#x60; indicates that the transfer is in the process of running; &#x60;complete&#x60; indicates it finished successfully; &#x60;failed&#x60; indicates it failed.
   */
  status: types.TransferDetailedTransferStatusEnum;
  /**
   * A hash that uniquely identifies the onchain transaction. This is only available where either source or destination are of type blockchain.
   */
  transactionHash?: string;
};
