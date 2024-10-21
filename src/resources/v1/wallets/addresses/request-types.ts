import { types } from "@circle/all_apis";

export type ListRequest = {
  walletId: string;
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  to?: string;
};

export type CreateRequest = {
  walletId: string;
  data: types.GenerateAddressRequest;
};
