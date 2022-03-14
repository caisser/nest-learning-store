import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';

@Controller('categories')
export class CategoriesController {
  @Get('')
  getCategories(): string {
    return `Categories list`;
  }

  @Get(':id/products/:productId')
  getCategory(
    @Param('id', ParseIntPipe) id: string,
    @Param('productId') productId: string,
  ): string {
    return `Category: ${id} product ${productId}`;
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return {
      message: 'Category created',
      data: payload,
    };
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return { id, ...payload };
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return { message: `Category with id: ${id} Deleted` };
  }
}
