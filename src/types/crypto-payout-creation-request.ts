import { types } from "@circle/all_apis";

export type CryptoPayoutCreationRequest = {
  amount: types.Money;
  destination: types.CryptoPayoutDestination;
  idempotencyKey: string;
  source?: types.TransferSourceWalletLocation;
  toAmount?: types.ToAmount;
};
