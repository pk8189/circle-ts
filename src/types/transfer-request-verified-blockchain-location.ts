import { types } from "@circle/all_apis";

export type TransferRequestVerifiedBlockchainLocation = {
  /**
   * The ID of the verified blockchain recipient address.
   */
  addressId: string;
  type: types.TransferRequestVerifiedBlockchainLocationTypeEnum;
};
