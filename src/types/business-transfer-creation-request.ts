import { types } from "@circle/all_apis";

export type BusinessTransferCreationRequest = {
  amount: types.Money;
  destination: types.TransferRequestVerifiedBlockchainLocation;
  idempotencyKey: string;
};
