import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('')
  getCategories(): string {
    return `Categories list`;
  }

  @Get(':id/products/:productId')
  getCategory(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Category: ${id} product ${productId}`;
  }

  @Post()
  createCategory(@Body() payload: any) {
    return {
      message: 'Category created',
      data: payload,
    };
  }
}
