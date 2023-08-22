import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigsService } from './configs/configs.service';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [CustomersModule, ConfigModule.forRoot({ isGlobal: true }), ConfigsModule],
  controllers: [AppController],
  providers: [AppService, ConfigsService],
})
export class AppModule {}
