import { types } from "@circle/all_apis";

export type Wallet = {
  /**
   * A list of balances for currencies owned by the wallet.
   */
  balances?: types.Money[];
  /**
   * A human-friendly, non-unique identifier for a wallet.
   */
  description?: string;
  /**
   * Universally unique identifier (UUID v4) of the entity that owns the wallet.
   */
  entityId?: string;
  /**
   * Wallet type.
   */
  type?: types.WalletTypeEnum;
  /**
   * Wallet identifier. Numeric value but should be treated as a string as format may change in the future&#x27;
   */
  walletId?: string;
};
