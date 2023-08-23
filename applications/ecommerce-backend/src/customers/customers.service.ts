import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { UniversalApiService } from 'universal-api';

@Injectable()
export class CustomersService {
  constructor(
    // private readonly commerceTools: CommercetoolsService,
    private readonly universalService: UniversalApiService,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a newssss customer';
  }

  async findAll() {
    return await this.universalService.getCustomers();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
