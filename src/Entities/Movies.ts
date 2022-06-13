import { MinLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Movies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 300 })
    name: string;

    @Column()
    releaseDate: Date;
}