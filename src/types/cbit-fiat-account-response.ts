import { types } from "@circle/all_apis";

export type CbitFiatAccountResponse = {
  createDate: string;
  id: string;
  status: types.ExternalFiatAccountStatusEnum;
  /**
   * Tracking ref that needs to be set in the public description field when you send the funds to Circle CBIT wallet.
   */
  trackingRef: string;
  /**
   * A &lt;TransferType, TransferTypeInfo&gt; map which shows transfer types supported on this account as well as additional information for each. For CBIT accounts this will always only show information for CBIT transfers.
   */
  transferTypesInfo: types.CbitFiatAccountResponseTransferTypesInfo;
  updateDate: string;
  /**
   * Your CBIT wallet address.
   */
  walletAddress: string;
};
