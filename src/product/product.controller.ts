import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('images', {
      storage: diskStorage({
        destination: '/uploads',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async createProduct(
    @Body() data: any,
    @UploadedFile() images: Express.Multer.File,
  ) {
    return this.productService.createProduct(data, images);
  }
  @Delete('/:id/delete')
  async deleteProduct(@Param('id') id: Product) {
    return this.productService.deleteProduct(id);
  }
  @Get('/public')
  async getAllProductPublic() {
    return this.productService.getAllPublic();
  }
  @Get('/private')
  async getAllPoductPrivate() {
    return this.productService.getAllPrivate();
  }
}
