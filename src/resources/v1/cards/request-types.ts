import { types } from "@circle/all_apis";

export type ListRequest = {
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
};

export type GetRequest = {
  id: string;
};

export type CreateRequest = {
  data: types.CardCreationRequest;
};

export type PutRequest = {
  id: string;
  data: types.CardUpdate;
};
