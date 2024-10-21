import { types } from "@circle/all_apis";

export type CardVerificationResponse = {
  avs: string;
  cvv: types.CvvResultsEnum;
};
