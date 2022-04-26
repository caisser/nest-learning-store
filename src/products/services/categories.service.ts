import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../interfaces/category.interface';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) throw new NotFoundException('category does not exist');
    return category;
  }

  create(data: CreateCategoryDto) {
    this.counterId = this.categories.length + 1;
    const newCategory: Category = {
      id: this.counterId,
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, data: UpdateCategoryDto) {
    const category = this.findOne(id);
    if (!category) throw new NotFoundException('category does not exist');
    const index = this.categories.findIndex((category) => category.id === id);
    this.categories[index] = {
      ...category,
      ...data,
    };
    return this.categories[index];
  }

  delete(id: number) {
    const category = this.findOne(id);
    if (!category) throw new NotFoundException('category does not exist');
    const index = this.categories.findIndex((category) => category.id === id);
    this.categories.splice(index, 1);
    return id;
  }
}
