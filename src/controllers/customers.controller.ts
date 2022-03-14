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
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return 'list of customers';
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    return `Customer with id: ${id}`;
  }

  @Post()
  createCustomer(@Body() payload: CreateCustomerDto) {
    return {
      message: 'Customer created',
      data: payload,
    };
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return {
      message: 'Customer updated ' + id,
      data: payload,
    };
  }

  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'Customer Deleted ' + id,
    };
  }
}
