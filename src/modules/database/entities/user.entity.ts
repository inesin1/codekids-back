import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: true })
  is_active: boolean;
}
