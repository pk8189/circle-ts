export type ListRequest = {
  from?: string;
  pageAfter?: string;
  pageBefore?: string;
  pageSize?: number;
  to?: string;
};

export type GetRequest = {
  id: string;
};
