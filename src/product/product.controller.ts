import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('images'))
  async createProduct(
    @Body() data:any,
    @UploadedFile() images: Express.Multer.File,
  ) {
    console.log(data)
    console.log(images)
    return this.productService.createProduct(data, images);
  }
}
