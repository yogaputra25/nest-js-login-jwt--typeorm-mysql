import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateDto } from 'src/user/dto/createuser.dto';
import { LoginDto } from './dto/login.dto';
import { ResponseHelper } from 'src/helper/response.helper';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private responHelper: ResponseHelper
      ) {}
    @Post('/register')
    async register(@Body()data: CreateDto) {
      return this.authService.register(data)
    }
// @UseGuards(LocalAuthGuard)
//     @Post('/login')
//     async login(@Body() data: LoginDto, @Request() req) {
//         console.log(req.user)
//         const login =await this.authService.validate(data)
//         if(login){
//             return this.responHelper.ok(login)
//         } else{
//             this.responHelper.badRequest
//         }
//     }

    @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

}
