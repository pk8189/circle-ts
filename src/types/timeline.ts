import { types } from "@circle/all_apis";

export type Timeline = {
  context?: types.TimelineContextEnum;
  reason?: types.TimelineReasonEnum;
  status: types.TimelineStatusEnum;
  /**
   * ISO-8601 UTC date/time format.
   */
  time: string;
};
