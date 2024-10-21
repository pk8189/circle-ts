import { types } from "@circle/all_apis";

export type DeleteRequest = {
  id: string;
};

export type ListRequest = {
  address?: string;
  chain?: string;
  email?: string;
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  status?: types.GetV1AddressBookRecipientsStatusEnum;
  to?: string;
};

export type GetRequest = {
  id: string;
};

export type PatchRequest = {
  id: string;
  data: types.AddressBookRecipientModifyRequest;
};

export type CreateRequest = {
  data: types.AddressBookRecipientRequest;
};
