import { types } from "@circle/all_apis";

export type ExchangeRateRequest = {
  from: types.FiatOptionalAmountMoney;
  to: types.FiatOptionalAmountMoney;
};
