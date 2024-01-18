import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetadataProduct } from './entity/metaproduct.entity';
import { Repository } from 'typeorm';
import { MetaProductDto } from './dto/metaProductDto';
import { Product } from 'src/product/entity/product.entity';

@Injectable()
export class TagProductService {
  constructor(
    @InjectRepository(MetadataProduct)
    private readonly metadataProduct: Repository<MetadataProduct>,
  ) {}

  async addMetaProduct(data: MetaProductDto, idProduct: Product) {
    const metaProduct = new MetadataProduct();
    metaProduct.tags = data.tagProduct;
    metaProduct.Descrip = data.describe;
    metaProduct.short = data.short;
    metaProduct.product = idProduct;
    await this.metadataProduct.save(metaProduct);
    return await this.metadataProduct.findOne({
      select: {
        id: true,
        short: true,
        tags: true,

        Descrip: true,
      },
      where: {
        id: metaProduct.id,
      },
      relations: { tags: true, product: true },
    });
  }
}
