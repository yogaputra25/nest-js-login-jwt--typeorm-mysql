import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
  UseGuards,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileEntity } from './entity/profile.entity';
import { ResponseHelper } from 'src/helper/response.helper';
import { JwtGuard } from 'src/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { CreateDto } from './dto/createProfile.dto';
import { SuccessResponseFactory } from 'src/helper/succes.helper';

@Controller('profile')
export class ProfileController {
  constructor(
    private profileService: ProfileService,
    private responseHelper: ResponseHelper,
  ) {}

  @Post('/:id')
  async createProfile(
    @Body() data: CreateDto,
    @Param() id: any,
  ): Promise<SuccessResponseFactory> {
    // if (resp) {
    //   return this.responseHelper.ok(resp);
    // } else {
    //   return this.responseHelper.badRequest();
    // }
    const resp = await this.profileService.createProfile(data, id);
    return SuccessResponseFactory.ok('Created', resp);
    // try {

    //   return {
    //     statusCode: HttpStatus.OK,
    //     data: resp,
    //   };
    // } catch (error) {
    //   return {
    //     statusCode: HttpStatus.BAD_REQUEST,
    //     message: error.query,
    //   };
    // }
  }

  @UseGuards(JwtGuard)
  @Get()
  async getAll() {
    const data = await this.profileService.getAllUser();

    if (data) {
      return this.responseHelper.ok(data);
    } else {
      return this.responseHelper.badRequest();
    }
  }
}
