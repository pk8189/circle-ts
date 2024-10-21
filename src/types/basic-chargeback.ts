import { types } from "@circle/all_apis";

export type BasicChargeback = {
  category?: types.ChargebackCategoriesEnum;
  /**
   * The chargeback item&#x27;s history list will be sorted by create date descending: more recent chargeback statuses will be at the beginning of the list.
   *
   */
  history: types.BasicChargebackHistory1[];
  id: string;
  merchantId: string;
  paymentId: string;
  /**
   * Reason code given by the card network for the chargeback item.
   */
  reasonCode: string;
  status: types.ChargebackStatusEnum;
};
