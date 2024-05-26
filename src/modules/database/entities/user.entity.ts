import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoleTypes } from 'src/types/user';
import { RoleTypes } from 'src/types/user';

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

  @Column({
    type: 'enum',
    enum: RoleTypes,
  })
  role: RoleTypes;
}
