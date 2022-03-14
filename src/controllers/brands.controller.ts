import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { BrandsService } from '../services/brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getBrands() {
    const brands = this.brandsService.findAll();
    return {
      message: 'Brands Listed',
      data: brands,
    };
  }

  @Get(':id')
  getBrandById(@Param('id', ParseIntPipe) id: number) {
    const brand = this.brandsService.findOne(id);
    return {
      message: 'Brand Retrieved',
      data: brand,
    };
  }

  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    return {
      message: 'Brand created',
      data: this.brandsService.create(payload),
    };
  }

  @Put(':id')
  updateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    const brand = this.brandsService.update(id, payload);
    return {
      message: `Brand ${id} updated`,
      data: brand,
    };
  }

  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    this.brandsService.delete(id);
    return {
      message: `Brand ${id} deleted`,
    };
  }
}
