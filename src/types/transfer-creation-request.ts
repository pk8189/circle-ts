import { types } from "@circle/all_apis";

export type TransferCreationRequest = {
  amount: types.Money;
  destination: types.TransferRequestBlockchainLocation | types.WalletLocation;
  idempotencyKey: string;
  source: types.TransferRequestSourceWalletLocation;
};
