import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

import Product from './Product';

@Entity()
export default class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  products: Product[];

  user: User;

  @Column('timestamp with time zone')
  date: Date;

  @Column('bool')
  canceled: boolean;
}
