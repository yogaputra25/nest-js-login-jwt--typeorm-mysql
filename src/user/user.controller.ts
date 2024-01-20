import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user';
import { CreateDto } from './dto/createuser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getall() {
    try {
      const data = await this.userService.getUser();
      return {
        statusCode: HttpStatus.OK,
        data: data,
      };
    } catch (error) {}
  }

  @Post()
  async createUser(@Body() data: CreateDto) {
    return await this.userService.createUser(data);
  }
  @Delete('/:id')
  async deleteUser(@Param() data) {
    return await this.userService.deleteUser(data);
  }
}
