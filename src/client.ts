import { AuthBearer, CoreClient } from "@circle/all_apis/core";
import { Environment } from "@circle/all_apis/environment";
import { PingClient } from "@circle/all_apis/resources/ping";
import { V1Client } from "@circle/all_apis/resources/v1";

export interface ClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
  token?: string;
}

export class Client {
  protected _client: CoreClient;
  v1: V1Client;
  ping: PingClient;

  constructor(opts?: ClientOptions) {
    const baseUrl = opts?.baseUrl ?? opts?.environment ?? Environment.Default;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });
    this._client.registerAuth("bearerAuth", new AuthBearer(opts?.token));

    this.v1 = new V1Client(this._client);
    this.ping = new PingClient(this._client);
  }
}
