import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('limit') limit = 20, @Query('offset') offset = 0) {
    return `returning orders from ${offset} to ${+offset + +limit}`;
  }

  @Get(':id')
  getOrderById(@Param('id') id: number) {
    return `returning order with id: ${id}`;
  }

  @Post()
  createOrder(@Body() payload: any) {
    return {
      message: 'order created',
      payload,
    };
  }
}
