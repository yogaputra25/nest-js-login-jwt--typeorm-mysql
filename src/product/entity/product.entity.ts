import { Tags } from 'src/tag/entity/tags.entity';
import { User } from 'src/user/entity/user';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameProduct: string;

  @Column()
  isPublic: number;

  @Column()
  file: string; // Simpan path file di database
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
