import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
import { CommercetoolsModule, CommercetoolsService } from 'commercetools';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CommercetoolsModule, ConfigModule.forRoot()],
  controllers: [CustomersController],
  providers: [CustomersService, CommercetoolsService],
})
export class CustomersModule {}
