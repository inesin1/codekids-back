import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
}
