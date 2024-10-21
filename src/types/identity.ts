import { types } from "@circle/all_apis";

export type Identity = {
  addresses: types.IdentityAddress[];
  /**
   * Full name of the identity.
   */
  name: string;
  /**
   * The type of identity for the originator.
   * * &#x60;individual&#x60; - A uniquely distinguishable individual.
   * * &#x60;business&#x60; - Any entity other than a natural person that can establish a permanent customer relationship with an affected entity or otherwise own property. This can include companies, foundations, anstalt, partnerships, associations and other relevantly similar entities.
   *
   */
  type: types.IdentityTypeEnum;
};
