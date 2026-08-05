import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('by-id/:id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Get('by-email/:email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Post('create')
  async createUser(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put('edit/:id')
  async editUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.editUser(id, updateUserDto);
  }
}
