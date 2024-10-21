import { types } from "@circle/all_apis";

export type ListRequest = {
  destinationWalletId?: string;
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  returnIdentities?: boolean;
  sourceWalletId?: string;
  to?: string;
  walletId?: string;
};

export type GetRequest = {
  id: string;
  returnIdentities?: boolean;
};

export type CreateRequest = {
  data: types.TransferCreationRequest;
};
