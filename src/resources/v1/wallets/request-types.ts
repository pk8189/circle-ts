import { types } from "@circle/all_apis";

export type ListRequest = {
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  to?: string;
};

export type GetRequest = {
  walletId: string;
};

export type CreateRequest = {
  data: types.WalletCreationRequest;
};
