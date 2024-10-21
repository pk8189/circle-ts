import { types } from "@circle/all_apis";

export type PixFiatAccountCreationRequest = {
  /**
   * Beneficiary account number.
   */
  accountNumber: string;
  accountType: types.PixAccountTypeEnum;
  /**
   * Beneficiary account branch code.
   */
  branchCode: string;
  idempotencyKey: string;
  /**
   * Beneficiary ISPB.
   */
  ispb: string;
  /**
   * Name of the beneficiary.
   */
  name: string;
  /**
   * Beneficiary Tax ID.
   */
  taxId: string;
};
