import { Injectable } from '@nestjs/common';
import { CommercetoolsClientService } from './commercetools-client.service';

@Injectable()
export class CommercetoolsService {
  constructor(private client: CommercetoolsClientService) {}

  async getCustomers() {
    return await this.client.customers().get().execute();
  }
}
