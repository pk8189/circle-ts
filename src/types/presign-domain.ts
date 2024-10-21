export type PresignDomain = {
  /**
   * chain id from https://chainid.network/
   */
  chainId: number;
  /**
   * User readable name of signing domain
   */
  name: string;
  /**
   * The address of the contract that will verify the signature
   */
  verifyingContract: string;
  /**
   * The current major version of the signing domain. Signatures from different versions are not compatible
   */
  version: string;
};
