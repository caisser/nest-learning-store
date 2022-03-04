import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return 'list of customers';
  }

  @Get(':id')
  getCustomerById(@Param('id') id: number) {
    return `Customer with id: ${id}`;
  }

  @Post()
  createCustomer(@Body() payload: any) {
    return {
      message: 'Customer created',
      data: payload,
    };
  }
}
