import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entity/profile.entity';
import { ResponseHelper } from 'src/helper/response.helper';
import { LocalStrategy } from 'src/strategies/local-strategy';
import { JwtStrategy } from 'src/strategies/jwt-strategy';
import { RefreshJwtStrategy } from 'src/strategies/refreshToken.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  providers: [ProfileService, ResponseHelper,
    JwtStrategy,
    RefreshJwtStrategy],
  controllers: [ProfileController]
})
export class ProfileModule {}
