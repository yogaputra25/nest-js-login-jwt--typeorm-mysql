import { MetadataProduct } from 'src/metaproduct/entity/metaproduct.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => MetadataProduct, (metadataProduct) => metadataProduct.tags)
  metadataProduct: MetadataProduct;
}
