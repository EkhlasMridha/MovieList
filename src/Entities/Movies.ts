import { MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class Movies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 300 })
    name: string;

    @Column()
    releaseDate: Date;
}