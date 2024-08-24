import { Test, TestingModule } from '@nestjs/testing';
import { ProductInfoController } from './productInfo.controller';
import { ProductInfoService } from './productInfo.service';

describe('AppController', () => {
  let appController: ProductInfoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductInfoController],
      providers: [ProductInfoService],
    }).compile();

    appController = app.get<ProductInfoController>(
      ProductInfoController,
    ) as ProductInfoController;
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
