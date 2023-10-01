import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { Users } from './entities/users.entity';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('new')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() newUser: CreateUserDTO): Promise<Users> {
    const user = new Users();

    user.username = newUser.username;
    user.password = newUser.password;
    user.email = newUser.email;

    return await this.usersService.createOrUpdateUser(user);
  }

  @Get('allusers')
  async findAllUsers(): Promise<Users[]> {
    return await this.usersService.findAll();
  }
}
