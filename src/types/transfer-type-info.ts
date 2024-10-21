import { types } from "@circle/all_apis";

export type TransferTypeInfo = {
  /**
   * Additional properties that apply to specific transfer type.
   */
  additionalProperties?: types.TransferTypeInfoAdditionalProperties;
  currencies: types.FiatCurrencyEnum[];
};
