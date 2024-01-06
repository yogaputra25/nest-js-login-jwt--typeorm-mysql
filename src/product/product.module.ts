import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]), // Register the Product entity with TypeORM
      ],
      controllers: [ProductController],
      providers: [ProductService],
})
export class ProductModule {


}
