export type ChannelResponse = {
  /**
   * Descriptor that appears on end-users&#x27; bank statements for ACH payments submitted through this channel.
   */
  achDescriptor?: string;
  /**
   * Descriptor that appears on cardholders&#x27; bank statements for card payments submitted through this channel.
   */
  cardDescriptor?: string;
  /**
   * Flag to indicate whether the channel is configured as default. At most one of the channels will have this flag set to true and the default channel is used when a payment request does not have the &#x60;channel&#x60; property set.
   */
  default?: boolean;
  id?: string;
};
