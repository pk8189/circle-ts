import { types } from "@circle/all_apis";

export type PresignResponseTypedData = {
  domain: types.PresignDomain;
  /**
   * Who pays for network fee. Can only be endUser or merchant. If it&#x27;s the endUser, totalAmount includes the network fee and networkFeeQuote isn&#x27;t null; If it&#x27;s the merchant, totalAmount doesn&#x27;t include network fee and networkFeeQuote is null.
   */
  feeChargeModel: types.PresignResponseTypedDataFeeChargeModelEnum;
  message: types.PresignMessage;
  networkFeeQuote?: types.NetworkFeeQuote;
  /**
   * Type of the message
   */
  primaryType: types.PresignResponseTypedDataPrimaryTypeEnum;
  totalAmount: types.FiatMoneyUsd;
  types: types.PresignMessageTypes;
};
