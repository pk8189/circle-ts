import { types } from "@circle/all_apis";

export type CryptoPayment = {
  amount: types.CryptoPaymentsOptionalAmountMoney;
  createDate?: string;
  depositAddress?: types.CryptoPaymentDepositAddress;
  fees?: types.FiatMoneyUsd;
  fromAddresses?: types.CryptoPaymentFromAddresses;
  id: string;
  merchantId: string;
  merchantWalletId?: string;
  networkFees?: types.CryptoPaymentNetworkFee;
  paymentIntentId?: string;
  riskEvaluation?: types.RiskEvaluation | null;
  settlementAmount?: types.FiatMoneyUsd;
  status: types.PaymentStatusEnum;
  transactionHash?: string;
  /**
   * Type of the payment object.
   */
  type: types.CryptoPaymentTypeEnum;
  updateDate?: string;
};
