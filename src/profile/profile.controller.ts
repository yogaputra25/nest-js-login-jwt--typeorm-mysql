import { Body, Controller, Get, Param, Post, Response, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileEntity } from './entity/profile.entity';
import { ResponseHelper } from 'src/helper/response.helper';
import { JwtGuard } from 'src/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(
    private profileService: ProfileService,
    private responseHelper: ResponseHelper,
  ) {}

  @Post('/:id')
  async createProfile(@Body() data: any, @Param() id: any) {
    const resp = await this.profileService.createProfile(data, id);
    if (resp) {
      return this.responseHelper.ok(resp);
    } else {
      return this.responseHelper.badRequest();
    }
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
