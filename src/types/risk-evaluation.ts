import { types } from "@circle/all_apis";

export type RiskEvaluation = {
  /**
   * Enumerated decision of the account.
   */
  decision?: types.RiskEvaluationDecisionEnum;
  /**
   * Risk reason for the definitive decision outcome.
   */
  reason?: string | null;
};
