import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
import { CommercetoolsModule, CommercetoolsService } from 'commercetools';

@Module({
  imports: [CommercetoolsModule],
  controllers: [CustomersController],
  providers: [CustomersService, CommercetoolsService],
})
export class CustomersModule {}
