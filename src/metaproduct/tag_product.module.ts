import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagProductService } from './tag_product.service';
import { TagProductController } from './tag_product.controller';
import { MetadataProduct } from './entity/metaproduct.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetadataProduct])],
  providers: [TagProductService],
  controllers: [TagProductController],
})
export class TagProductModule {}
