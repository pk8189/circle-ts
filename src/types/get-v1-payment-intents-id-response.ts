import { types } from "@circle/all_apis";

export type GetV1PaymentIntentsIdResponse = {
  data?: types.PaymentIntent | types.ContinuousPaymentIntent;
};
