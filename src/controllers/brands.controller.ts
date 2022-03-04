import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return 'List of brands';
  }

  @Get(':id')
  getBrandById(@Param('id') id: number) {
    return `Brand with id: ${id}`;
  }
}
