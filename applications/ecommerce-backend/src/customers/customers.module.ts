import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
import { ConfigsService } from '../configs/configs.service';
import { UniversalApiModule } from 'universal-api';
import { ConfigsModule } from 'src/configs/configs.module';

@Module({
  imports: [
    ConfigsModule,
    UniversalApiModule.register(
      'commTools', // Yet this is the only one option needed
      new ConfigsService().generateConfigs(),
    ),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
