import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
// import { CommercetoolsModule, CommercetoolsService } from 'commercetools';
import { ConfigModule } from '@nestjs/config';

import { UniversalApiModule } from 'universal-api';
// import { UniversalApiModule } from 'turborepo';

//TODO: import UniversalApiModule as external npm package

@Module({
  imports: [
    // CommercetoolsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UniversalApiModule.register('commTools'),
  ],
  controllers: [CustomersController],
  providers: [CustomersService /* , CommercetoolsService */],
})
export class CustomersModule {}
