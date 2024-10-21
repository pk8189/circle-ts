import { types } from "@circle/all_apis";

export type DeleteRequest = {
  id: string;
};

export type ListRequest = {
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  to?: string;
};

export type CreateRequest = {
  data: types.BusinessRecipientAddressCreationRequest;
};
