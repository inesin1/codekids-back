import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonRepository } from '../database/repositories/lesson.repository';
import { QueryOptions } from 'src/types/query-options';
import { Like } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(private lessonRepository: LessonRepository) {}

  create(createLessonDto: CreateLessonDto) {
    const { student_id, teacher_id, course_id } = createLessonDto;
    return this.lessonRepository.save({
      ...createLessonDto,
      student: { id: student_id },
      teacher: { id: teacher_id },
      course: { id: course_id },
    });
  }

  findAll(queryOptions: QueryOptions) {
    return this.lessonRepository.findAll({
      where: queryOptions.search
        ? [
            { student: Like(`%${queryOptions.search}%`) },
            { teacher: Like(`%${queryOptions.search}%`) },
          ]
        : undefined,
      skip: queryOptions.page,
      take: queryOptions.limit,
      relations: queryOptions.with,
    });
  }

  findOne(id: number, queryOptions: QueryOptions) {
    return this.lessonRepository.findOne({
      where: { id },
      relations: queryOptions.with,
    });
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    const { student_id, teacher_id, course_id } = updateLessonDto;
    return this.lessonRepository.update(id, {
      ...updateLessonDto,
      student: { id: student_id },
      teacher: { id: teacher_id },
      course: { id: course_id },
    });
  }

  remove(id: number) {
    return this.lessonRepository.remove(id);
  }
}
