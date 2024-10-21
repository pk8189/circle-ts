import { types } from "@circle/all_apis";

export type CancelCreationRequest = {
  idempotencyKey: string;
  reason?: types.ReversalReasonEnum;
};
