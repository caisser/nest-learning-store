import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ParseIntPipe } from '../common/parse-int.pipe';

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

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'User retrieved' + id,
      data: [{ id: 1, customerId: 1, username: 'Lucho', password: 'luis123' }],
    };
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return {
      message: 'User created',
      data: payload,
    };
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return {
      message: 'User updated',
      data: payload,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'User deleted' + id,
    };
  }
}
