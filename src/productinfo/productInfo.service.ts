import { Injectable, Logger } from '@nestjs/common';
import { Product } from './interfaces/Product.interface';
import { ResponseDto } from '../dto/response.dto';

@Injectable()
export class ProductInfoService {
  private readonly logger: Logger = new Logger(ProductInfoService.name);
  private readonly products: Product[] = [];

  createProduct(product: Product): ResponseDto {
    this.products.push(product);
    return {
      responseCode: 201,
      responseDesc: 'success',
      responseData: product,
    };
  }
}
