import { Injectable, Inject } from '@nestjs/common';
import { CommercetoolsClientService } from 'commercetools';
import { TestLibService } from 'test-lib';

@Injectable()
export class UniversalApiService {
  ecommProvider;

  constructor(
    @Inject('EXTERNAL_SERVICE')
    private service: CommercetoolsClientService | TestLibService
  ) {
    this.ecommProvider = this.service;
  }

  getCustomers() {
    return this.ecommProvider.getCustomers();
  }

  getProducts() {
    return this.ecommProvider.getProducts();
  }
}
