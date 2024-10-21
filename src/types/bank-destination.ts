import { types } from "@circle/all_apis";

export type BankDestination = {
  id: string;
  /**
   * Bank name plus last four digits of the bank account number or IBAN.
   */
  name?: string;
  type: types.BusinessAccountPayoutDestinationTypeEnum;
};
