import { types } from "@circle/all_apis";

export type ExchangeRateResponse = {
  from: types.FiatOptionalAmountMoney;
  id: string;
  /**
   * Exchange rate
   */
  rate: number;
  timestamp: string;
  to: types.FiatOptionalAmountMoney;
};
