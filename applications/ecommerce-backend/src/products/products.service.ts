import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { UniversalApiService } from 'universal-api';

@Injectable()
export class ProductsService {
  constructor(private readonly universalService: UniversalApiService) {}

  async findAll() {
    return await this.universalService.getProducts();
  }
}
