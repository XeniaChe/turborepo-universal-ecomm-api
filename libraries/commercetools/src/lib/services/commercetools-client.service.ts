/* eslint-disable no-console */
import { Injectable } from '@nestjs/common';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommercetoolsClientService {
  readonly #apiRoot: ApiRoot;

  readonly #projectKey: string;
  // readonly #region: string;
  // readonly #scopes_raw = <string>(<unknown>process.env.CTP_SCOPES);
  readonly #scopes: string[];

  constructor(private readonly config: ConfigService) {
    this.#apiRoot = this.#getApiRoot();
    this.#projectKey = config.get('.CTP_PROJECT_KEY')!;
    this.#scopes = config.get('CTP_SCOPES')?.split(' ');
  }

  customers() {
    return this.#apiRoot
      .withProjectKey({ projectKey: this.#projectKey })
      .customers();
  }

  #getApiRoot() {
    const projectKey = this.config.get('CTP_PROJECT_KEY')!;
    const scopes = this.config.get('CTP_SCOPES')?.split(' ');

    console.log('ProjKey ' + this.#projectKey);
    // console.log('Scopes' + this.#scopes);
    console.log({ projectKey });

    console.log(
      'CONFIG : ' + JSON.stringify(this.config.get<string>('COMTOOLS_PORT'))
    );
    const authMiddlewareOptions: AuthMiddlewareOptions = {
      host: /* <string>this.config.get('CTP_AUTH_URL')! */ 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey,
      credentials: {
        clientId: <string>this.config.get('CTP_CLIENT_ID')!,
        clientSecret: <string>this.config.get('CTP_CLIENT_SECRET')!,
      },
      scopes,
      fetch,
    };

    // Configure httpMiddlewareOptions
    const httpMiddlewareOptions: HttpMiddlewareOptions = {
      host: <string>this.config.get('CTP_API_URL')!,
      fetch,
    };

    const client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();

    return createApiBuilderFromCtpClient(client);
  }
}
