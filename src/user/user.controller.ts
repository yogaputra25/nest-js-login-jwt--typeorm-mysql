import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user';
import { CreateDto } from './dto/createuser.dto';
import { PaginationDto } from 'src/dto/pagination.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getall(@Query() data: PaginationDto) {
    const resp = this.userService.dataAll(data);
    return resp;
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
