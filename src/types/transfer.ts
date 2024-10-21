import { types } from "@circle/all_apis";

export type Transfer = {
  amount: types.Money;
  /**
   * The create date of the transfer.
   */
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
  source:
  | types.TransferSourceWalletLocation
  | types.TransferSourceBlockchainLocation;
  /**
   * Status of the transfer. Status &#x60;pending&#x60; indicates that the transfer is in the process of running; &#x60;complete&#x60; indicates it finished successfully; &#x60;failed&#x60; indicates it failed. Circle Mint Singapore customers may have transfers in the &#x60;pending&#x60; status if the recipient addresses are not verified.
   */
  status: types.TransferStatusEnum;
  /**
   * A hash that uniquely identifies the onchain transaction. This is only available where either source or destination are of type blockchain.
   */
  transactionHash?: string;
};
