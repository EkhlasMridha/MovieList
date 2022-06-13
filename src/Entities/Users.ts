import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    firstName: string;

    @Column({ length: 250 })
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}