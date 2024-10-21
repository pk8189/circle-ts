export type ListRequest = {
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  paymentId?: string;
  to?: string;
};

export type GetRequest = {
  id: string;
};
