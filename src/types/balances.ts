import { types } from "@circle/all_apis";

export type Balances = {
  /**
   * List of currency balances (one for each currency) that are currently available to spend.
   */
  available: types.Money[];
  /**
   * List of currency balances (one for each currency) that have been captured but are currently in the process of settling and will become available to spend at some point in the future.
   */
  unsettled: types.Money[];
};
