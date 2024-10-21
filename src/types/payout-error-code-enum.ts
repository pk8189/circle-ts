export enum PayoutErrorCodeEnum {
  BankTransactionError = "bank_transaction_error",
  FiatAccountLimitExceeded = "fiat_account_limit_exceeded",
  InsufficientFunds = "insufficient_funds",
  InvalidAchRtn = "invalid_ach_rtn",
  InvalidBankAccountNumber = "invalid_bank_account_number",
  InvalidWireRtn = "invalid_wire_rtn",
  TransactionDenied = "transaction_denied",
  TransactionFailed = "transaction_failed",
  TransactionReturned = "transaction_returned",
  VendorInactive = "vendor_inactive",
}
