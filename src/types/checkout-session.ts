import { types } from "@circle/all_apis";

export type CheckoutSession = {
  amount: types.CheckoutSessionMoney;
  amountPaid: types.CheckoutSessionMoney;
  /**
   * The access token for the SDK to access checkout session resources
   */
  clientToken: string;
  createDate: string;
  expiresOn: string;
  id: string;
  /**
   * IDs of all the associated payments.
   */
  paymentIds: string[];
  /**
   * IDs of all the associated payment intents.
   */
  paymentIntentIds: string[];
  status: types.CheckoutSessionStatusEnum;
  successUrl?: string;
  /**
   * The type of this response
   */
  type: types.CheckoutSessionTypeEnum;
  updateDate: string;
};
