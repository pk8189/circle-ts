import { types } from "@circle/all_apis";

export type GetV1PaymentsResponse = {
  data?: (
    | types.FiatPayment
    | types.CryptoPayment
    | types.FiatCancel
    | types.FiatRefund
  )[];
};
