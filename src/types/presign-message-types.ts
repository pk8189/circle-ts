import { types } from "@circle/all_apis";

export type PresignMessageTypes = {
  /**
   * Data schema of the domain field in typedData. It&#x27;s a list of (name, type) pair
   */
  EIP712Domain?: types.PresignMessageTypesItems[];
  /**
   * Data schema of the message in typedData. It&#x27;s a list of (name, type) pair
   */
  TransferWithAuthorization?: types.PresignMessageTypesItems[];
};
