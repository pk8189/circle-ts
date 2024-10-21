import { types } from "@circle/all_apis";

export type CaptureCreationRequest = {
  amount?: types.FiatMoneyUsd;
  idempotencyKey: string;
};
