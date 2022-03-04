import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      data: [
        { id: 1, customerId: 1, username: 'Lucho', password: 'luis123' },
        { id: 1, customerId: 1, username: 'Lucho', password: 'luis123' },
      ],
    };
  }

  @Post()
  createUser(@Body() payload: any) {
    return {
      message: 'User created',
      data: payload,
    };
  }
}
