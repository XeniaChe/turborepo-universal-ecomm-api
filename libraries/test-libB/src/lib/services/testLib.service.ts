import { Injectable } from '@nestjs/common';

@Injectable()
export class TestLibService {
  constructor() {
    this.#testPrint();
  }
  #testPrint() {
    // eslint-disable-next-line no-console
    console.log('TESTLIB loaded');
  }

  async getCustomers() {
    try {
      const customers = ['test-cust1', 'test-cust2'];
      return customers;
    } catch (error) {
      console.error(error);

      return undefined;
    }
  }

  async getProducts() {
    try {
      const products = ['test-prod1', 'test-prod2'];
      return products;
    } catch (error) {
      console.error(error);

      return undefined;
    }
  }
}
