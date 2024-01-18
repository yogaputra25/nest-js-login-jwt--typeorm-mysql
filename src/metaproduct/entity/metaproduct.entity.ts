import { Product } from 'src/product/entity/product.entity';
import { Tags } from 'src/tag/entity/tags.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MetadataProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Descrip: string;

  @Column()
  short: string;
  @ManyToMany(() => Tags)
  @JoinTable()
  tags: Tags[];

  @OneToOne(() => Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  product: Product;
}
