import { Module, DynamicModule /* , Provider */, Global } from '@nestjs/common';
import { UniversalApiService } from './app.service';
import { CommercetoolsModule, CommercetoolsClientService } from 'commercetools';
import { TestModule, TestLibService } from 'test-lib';

interface EcommerceProviderConfigs {
  CTP_PROJECT_KEY: string;
  CTP_CLIENT_SECRET: string;
  CTP_CLIENT_ID: string;
  CTP_AUTH_URL: string;
  CTP_API_URL: string;
  CTP_SCOPES: string;
  CTP_REGION: string;
}
@Global()
@Module({})
export class UniversalApiModule {
  // Dynamic module
  /* https://docs.nestjs.com/fundamentals/dynamic-modules */
  static register(
    opt: string,
    configs: EcommerceProviderConfigs
  ): DynamicModule {
    const imports =
      opt === 'commTools'
        ? [CommercetoolsModule.register(configs)]
        : [TestModule];

    return {
      module: UniversalApiModule,
      imports,
      providers: [
        // Custom useFactory provider
        /* https://docs.nestjs.com/fundamentals/custom-providers#class-providers-useclass */
        {
          provide: 'EXTERNAL_SERVICE',
          useFactory: () =>
            opt === 'commTools'
              ? new CommercetoolsClientService(configs)
              : TestLibService,
        },
        UniversalApiService,
      ],
      exports: [UniversalApiService],
    };
  }
}
