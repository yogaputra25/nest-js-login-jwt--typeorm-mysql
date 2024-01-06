import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { BcryptService } from './bcrypt/bcrypt.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'temp123',
    database: 'db_payment',
    entities: [User],
    autoLoadEntities: true,
    synchronize: true
  }),UserModule, ProfileModule, AuthModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, BcryptService],
})
export class AppModule {}
