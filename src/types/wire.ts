import { types } from "@circle/all_apis";

export type Wire = {
  bankAddress?: types.BankAddress;
  billingDetails: types.BillingDetails;
  createDate: string;
  /**
   * Bank name plus last four digits of the bank account number or IBAN.
   */
  description: string;
  fingerprint: string;
  id: string;
  status: types.ExternalFiatAccountStatusEnum;
  /**
   * Wire tracking ref that needs to be set in the wire reference to beneficiary field.
   */
  trackingRef: string;
  /**
   * A &lt;TransferType, TransferTypeInfo&gt; map which shows transfer types supported on this account as well as additional information for each.
   */
  transferTypesInfo: types.WireTransferTypesInfo;
  updateDate: string;
};
