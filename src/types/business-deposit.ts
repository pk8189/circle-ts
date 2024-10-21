import { types } from "@circle/all_apis";

export type BusinessDeposit = {
  amount: types.FiatMoney;
  createDate: string;
  destination: types.WalletLocation;
  fee?: types.FiatMoneyUsd;
  id: string;
  riskEvaluation?: types.RiskEvaluation | null;
  /**
   * The identifier for the bank account where the funds were deposited from.
   */
  sourceWalletId?: string;
  /**
   * Status of the deposit. Status &#x60;pending&#x60; indicates that the deposit is in the process of running; &#x60;complete&#x60; indicates it finished successfully; &#x60;failed&#x60; indicates it failed.
   */
  status: types.BusinessDepositStatusEnum;
  updateDate?: string;
};
