import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('')
  getCategories() {
    const categories = this.categoriesService.findAll();
    return {
      message: 'Categories Listed',
      data: categories,
    };
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    const category = this.categoriesService.findOne(id);
    return {
      message: 'Category retrived',
      data: category,
    };
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    const newCategory = this.categoriesService.create(payload);
    return {
      message: 'Category created',
      data: newCategory,
    };
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    const category = this.categoriesService.update(id, payload);
    return {
      message: 'Category updated',
      data: category,
    };
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    this.categoriesService.delete(id);
    return { message: `Category with id: ${id} Deleted` };
  }
}
