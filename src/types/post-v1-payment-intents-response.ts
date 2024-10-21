import { types } from "@circle/all_apis";

export type PostV1PaymentIntentsResponse = {
  data?: types.PaymentIntent | types.ContinuousPaymentIntent;
};
