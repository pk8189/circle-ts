import { types } from "@circle/all_apis";

export type Source = {
  id?: string;
  /**
   * Type of the source.
   */
  type?: types.SourceTypeEnum;
};
