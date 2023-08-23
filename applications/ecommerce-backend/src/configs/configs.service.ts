import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// TODO: add one more possible interface for bigCommerce configs object
interface CommToolsConfigsOptions {
  CTP_PROJECT_KEY: string;
  CTP_CLIENT_SECRET: string;
  CTP_CLIENT_ID: string;
  CTP_AUTH_URL: string;
  CTP_API_URL: string;
  CTP_SCOPES: string;
  CTP_REGION: string;
}

@Injectable()
export class ConfigsService {
  config: ConfigService;

  constructor() {
    this.config = new ConfigService();
  }

  generateConfigs(): CommToolsConfigsOptions {
    return {
      CTP_PROJECT_KEY: this.config.get('CTP_PROJECT_KEY')!,
      CTP_CLIENT_SECRET: this.config.get('CTP_CLIENT_SECRET')!,
      CTP_CLIENT_ID: this.config.get<string>(`CTP_CLIENT_ID`)!,
      CTP_AUTH_URL: this.config.get<string>(`CTP_AUTH_URL`)!,
      CTP_API_URL: this.config.get<string>(`CTP_API_URL`)!,
      CTP_SCOPES: this.config.get<string>(`CTP_SCOPES`)!,
      CTP_REGION: this.config.get<string>(`CTP_REGION`)!,
    };
  }
}
