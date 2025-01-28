import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'PersonajesFavoritos'})
export class PersonajesFavoritosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ki: string;

    @Column()
    maxKi: string;

    @Column()
    race: string;

    @Column()
    gender: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    affiliation: string;

    // @Column({ type: 'timestamp', nullable: true })
    // deletedAt?: Date | null;
    @Column({ type: 'datetime', nullable: true })
    deletedAt: Date | null;

    @Column({ nullable: true })
    favorito?: boolean;
}
