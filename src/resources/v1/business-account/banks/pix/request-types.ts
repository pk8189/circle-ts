import { types } from "@circle/all_apis";

export type GetRequest = {
  id: string;
};

export type CreateRequest = {
  data: types.PixFiatAccountCreationRequest;
};
