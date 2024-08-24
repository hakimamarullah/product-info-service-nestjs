import { Module } from '@nestjs/common';
import { ProductInfoModule } from './productinfo/productInfo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ProductInfoModule],
})
export class AppModule {}
