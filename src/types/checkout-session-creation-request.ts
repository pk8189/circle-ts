import { types } from "@circle/all_apis";

export type CheckoutSessionCreationRequest = {
  amount: types.CheckoutSessionMoney;
  successUrl?: string;
};
