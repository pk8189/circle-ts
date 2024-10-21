import { types } from "@circle/all_apis";

export type UnwithdrawalObject = {
  amount?: types.FiatMoneyUsd;
  createDate?: string;
  fees?: types.FiatMoneyUsd;
  id?: string;
  payoutId?: string;
  /**
   * Reason for the return.
   */
  reason?: string;
  /**
   * Status of the return. A &#x60;pending&#x60; status indicates that the return is in process; &#x60;complete&#x60; indicates it finished successfully; &#x60;failed&#x60; indicates it failed.
   */
  status?: types.UnwithdrawalObjectStatusEnum;
  updateDate?: string;
};
