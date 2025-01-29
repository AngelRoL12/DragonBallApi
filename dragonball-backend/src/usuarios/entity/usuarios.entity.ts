import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Usuarios' })
export class UserEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    readonly id: number;

    @Column({ type: 'varchar', length: 120, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    password: string;

    @Column({ default: true, nullable: true })
    status: boolean;

    @Column({ type: 'varchar', nullable: true })
    token: string;

}