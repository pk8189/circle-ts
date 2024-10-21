import { types } from "@circle/all_apis";

export type GetV1PaymentIntentsResponse = {
  data?: (types.PaymentIntent | types.ContinuousPaymentIntent)[];
};
