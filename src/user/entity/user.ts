import { ProfileEntity } from "src/profile/entity/profile.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { Product } from "src/product/entity/product.entity";
@Entity({
    name: 'users',
  })
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
    
    @Column({ unique:true })
    email: string

    @Column()
    password: string;

    @OneToMany(()=> Product,(product) => product)
    product: Product


    
    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    
 
}
