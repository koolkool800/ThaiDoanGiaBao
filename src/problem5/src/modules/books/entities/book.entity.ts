import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseTimestampEntity } from '../../../common/entities/base.entity';
import { DATABASE_NAME } from '../../../common/entities/database-name';

@Entity(DATABASE_NAME.BOOKS)
export class Book extends BaseTimestampEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'author' })
    author: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;

    @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
    price: number;
}
