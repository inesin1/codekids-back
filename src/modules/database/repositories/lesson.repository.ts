import { LessonEntity } from '../entities/lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from './base.repository';
import { Repository } from 'typeorm';

export class LessonRepository extends BaseRepository<LessonEntity> {
  constructor(
    @InjectRepository(LessonEntity) lessonRepository: Repository<LessonEntity>,
  ) {
    super(lessonRepository);
  }
}
