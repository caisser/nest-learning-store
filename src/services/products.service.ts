import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Super Ceular',
      price: 1000,
      stock: 3,
      image: '',
    },
    {
      id: 2,
      name: 'Mac Book Pro',
      description: 'Super Portatil',
      price: 10000,
      stock: 2,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new NotFoundException('Product does not exist');
    return product;
  }

  create(data: CreateProductDto) {
    console.log(data);
    this.counterId = this.products.length + 1;
    const newProduct = {
      id: this.counterId,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) return null;
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const product = this.findOne(id);
    if (!product) return null;
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return id;
  }
}
