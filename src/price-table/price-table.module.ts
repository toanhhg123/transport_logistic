import { Module } from '@nestjs/common';
import { PriceTableController } from './price-table.controller';

@Module({
  controllers: [PriceTableController]
})
export class PriceTableModule {}
