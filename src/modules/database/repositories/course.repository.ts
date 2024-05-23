import { CourseEntity } from '../entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { Repository } from 'typeorm';


export class CourseRepository extends BaseRepository<CourseEntity> {
  constructor(
    @InjectRepository(CourseEntity) courseRepository: Repository<CourseEntity>,
  ) {
    super(courseRepository);
  }
}
