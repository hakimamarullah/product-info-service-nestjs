import { Module } from '@nestjs/common';
import { ProductInfoController } from './productInfo.controller';
import { ProductInfoService } from './productInfo.service';

@Module({
  imports: [],
  controllers: [ProductInfoController],
  providers: [ProductInfoService],
})
export class ProductInfoModule {}
