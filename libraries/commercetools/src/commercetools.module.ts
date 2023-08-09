import { Module } from '@nestjs/common';
import { CommercetoolsService } from './commercetools.service';

@Module({
  providers: [CommercetoolsService],
  exports: [CommercetoolsService],
})
export class CommercetoolsModule {}
