import { types } from "@circle/all_apis";

export type BasicChargebackHistory1 = {
  chargebackAmount: types.FiatMoneyUsd;
  createDate?: string;
  /**
   * The reason the chargeback was created.
   */
  description: string;
  fee?: types.FiatMoneyUsd;
  settlementId?: string | null;
  /**
   * Enumerated type of the chargeback history event. &#x60;1st Chargeback&#x60; represents the first stage of the dispute procedure initiated by the cardholder’s issuing bank.
   *   &#x60;2nd Chargeback&#x60; represents the second stage of the dispute procedure initiated by the cardholder’s issuing bank (This stage is MasterCard only).
   *   &#x60;Chargeback Reversal&#x60; represents when 1st Chargeback or 2nd Chargeback is withdrawn by the issuer.
   *   &#x60;Representment&#x60; represents the stage when merchants decided to dispute 1st Chargeback or 2nd Chargeback.
   *   &#x60;Chargeback Settlement&#x60; can imply one of the two: 1) If merchant or marketplace is taking the lost of the chargeback, money will be debit from the wallet during this stage.
   *   2) If merchant of marketplace successfully dispute the chargeback, money will be credit back to the wallet during this stage.
   *
   */
  type: types.BasicChargebackHistoryTypeEnum;
};
