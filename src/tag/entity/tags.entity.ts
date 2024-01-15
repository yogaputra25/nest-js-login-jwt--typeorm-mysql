import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Tags {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
}
