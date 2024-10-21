import { types } from "@circle/all_apis";

export type SourceResponse = {
  id?: string;
  /**
   * Type of the source.
   */
  type?: types.SourceResponseTypeEnum;
};
