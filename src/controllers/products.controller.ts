import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    const products = this.productsService.findAll();
    return {
      message: 'Products listed',
      data: products,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `product retrieved`,
      data: this.productsService.findOne(id),
    };
  }

  @Post()
  createProduct(@Body() payload: any) {
    const newProduct = this.productsService.create(payload);
    return {
      message: 'Product created',
      data: newProduct,
    };
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: any) {
    const product = this.productsService.update(+id, payload);
    return {
      message: `Product ${id} updated`,
      data: product,
    };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    this.productsService.delete(+id);
    return {
      message: `product ${id} deleted`,
    };
  }
}
