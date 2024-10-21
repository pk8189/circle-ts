import { types } from "@circle/all_apis";

export type PixInstruction = {
  /**
   * Beneficiary account number.
   */
  accountNumber?: string;
  accountType?: types.PixAccountTypeEnum;
  /**
   * Beneficiary account branch code.
   */
  branchCode?: string;
  /**
   * ISPB of beneficiary&#x27;s bank.
   */
  ispb?: string;
  /**
   * Name of the beneficiary.
   */
  name?: string;
  /**
   * Beneficiary Tax ID.
   */
  taxId?: string;
  /**
   * Circle tracking reference that needs to be set in the PIX reference field.
   */
  trackingRef?: string;
};
