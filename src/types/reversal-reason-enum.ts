export enum ReversalReasonEnum {
  BankAccountIneligible = "bank_account_ineligible",
  BankTransactionError = "bank_transaction_error",
  Duplicate = "duplicate",
  Fraudulent = "fraudulent",
  InsufficientFunds = "insufficient_funds",
  InvalidAccountNumber = "invalid_account_number",
  InvalidAchRtn = "invalid_ach_rtn",
  PaymentFailed = "payment_failed",
  PaymentReturned = "payment_returned",
  PaymentStoppedByIssuer = "payment_stopped_by_issuer",
  RequestedByCustomer = "requested_by_customer",
  UnauthorizedTransaction = "unauthorized_transaction",
}
