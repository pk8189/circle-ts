import { types } from "@circle/all_apis";

export type PaymentVerificationResponse = {
  avs: string;
  cvv: types.CvvResultsEnum;
  eci?: types.EciEnum;
  threeDSecure?: types.ThreeDsResultEnum;
};
