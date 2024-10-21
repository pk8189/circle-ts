import { types } from "@circle/all_apis";

export type GetV1PaymentsIdResponse = {
  data?: types.FiatPaymentPolymorphic | types.CryptoPayment;
};
