import { Body, Controller, Param, Post } from '@nestjs/common';
import { TagProductService } from './tag_product.service';
import { MetaProductDto } from './dto/metaProductDto';
import { Product } from 'src/product/entity/product.entity';

@Controller('metaproduct')
export class TagProductController {
  constructor(private metaProductService: TagProductService) {}
  @Post('/:id/meta')
  async createMetaProduct(
    @Body() data: MetaProductDto,
    @Param('id') id: Product,
  ) {
    return await this.metaProductService.addMetaProduct(data, id);
  }
}
