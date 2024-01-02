import { User } from "src/user/entity/user";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class ProfileEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    hobby: string
    
    @Column()
    gender: string

    @Column()
    addres: string;
    @Column()
    contact: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
        @OneToOne(()=> User)
    @JoinColumn()
    user: User

}