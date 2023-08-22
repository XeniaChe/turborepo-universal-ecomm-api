import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigsService } from './configs/configs.service';
import { ProductsModule } from './products/products.module';

import { UniversalApiModule } from 'universal-api';
import { ConfigsModule } from 'src/configs/configs.module';

@Module({
  imports: [
    ConfigsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UniversalApiModule.register(
      'commTools', // Yet this is the only one option needed
      new ConfigsService().generateConfigs(),
    ),

    CustomersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigsService],
})
export class AppModule {}
