import { StudentEntity } from '../entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { Repository } from 'typeorm';

export class StudentRepository extends BaseRepository<StudentEntity> {
  constructor(
    @InjectRepository(StudentEntity) studentRepository: Repository<StudentEntity>,
  ) {
    super(studentRepository);
  }
}
