import { types } from "@circle/all_apis";

export type ListRequest = {
  chain?: types.GetV1PayoutsChainEnum;
  destination?: string;
  destinationCurrency?: types.GetV1PayoutsDestinationCurrencyEnum;
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  source?: string;
  sourceCurrency?: types.GetV1PayoutsSourceCurrencyEnum;
  status?: types.PayoutStatusEnum[];
  to?: string;
  typeQuery?: types.PayoutDestinationTypeEnum[];
};

export type GetRequest = {
  id: string;
};

export type CreateRequest = {
  data: types.CryptoPayoutCreationRequest;
};
