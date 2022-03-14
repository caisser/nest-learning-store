import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../interfaces/brand.interface';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Electronics',
      image: '',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException('Brand does not exist');
    return brand;
  }

  create(data: CreateBrandDto) {
    this.counterId = this.brands.length + 1;
    const newBrand = {
      id: this.counterId,
      ...data,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, data: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (!brand) throw new NotFoundException('Brand does not exist');
    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands[index] = {
      ...brand,
      ...data,
    };
    return this.brands[index];
  }

  delete(id: number) {
    const brand = this.findOne(id);
    if (!brand) throw new NotFoundException('Brand does not exist');
    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands.splice(index, 1);
    return id;
  }
}
