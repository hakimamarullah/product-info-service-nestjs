import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { ProductInfoService } from './productInfo.service';
import { Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { ResponseDto } from '../dto/response.dto';

@Controller('/products')
export class ProductInfoController {
  private readonly logger: Logger = new Logger(ProductInfoController.name);

  constructor(private readonly appService: ProductInfoService) {}

  @Post()
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<void> {
    const response: ResponseDto =
      this.appService.createProduct(createProductDto);
    res.status(response.responseCode).json(response);
  }
}
