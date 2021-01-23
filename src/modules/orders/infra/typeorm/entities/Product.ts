import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  short_description: string;

  @Column()
  long_description: string;

  @Column()
  image_url: string;

  @Column()
  price: number;

  @Column()
  vat_percentage: number;

  @Column()
  inactive: boolean;
}
