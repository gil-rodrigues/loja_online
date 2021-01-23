import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  abbreviated_name: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar_url: string;

  @Column()
  inactive: boolean;
}
