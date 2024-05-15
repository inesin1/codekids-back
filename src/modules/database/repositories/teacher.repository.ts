import { TeacherEntity } from '../entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { Repository } from 'typeorm';


export class TeacherRepository extends BaseRepository<TeacherEntity> {
  constructor(
    @InjectRepository(TeacherEntity) TeacherRepository: Repository<TeacherEntity>,
  ) {
    super(TeacherRepository);
  }
}
