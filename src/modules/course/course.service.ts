import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseRepository } from '../database/repositories/course.repository';
import { Like } from 'typeorm';
import { QueryOptions } from 'src/types/query-options';

@Injectable()
export class CourseService {
  constructor(private courseRepository: CourseRepository) {}

  create(createTeacherDto: CreateCourseDto) {
    return this.courseRepository.save({
      ...createTeacherDto,
    });
  }

  findAll(queryOptions: QueryOptions) {
    return this.courseRepository.findAll({
      where: queryOptions.search
        ? { name: Like(`%${queryOptions.search}%`) }
        : undefined,
      skip: queryOptions.page,
      take: queryOptions.limit,
      relations: queryOptions.with,
    });
  }

  findOne(id: number, queryOptions: QueryOptions) {
    return this.courseRepository.findOne({
      where: { id },
      relations: queryOptions.with,
    });
  }

  update(id: number, updateTeacherDto: UpdateCourseDto) {
    return this.courseRepository.update(id, {
      ...updateTeacherDto,
    });
  }

  remove(id: number) {
    return this.courseRepository.remove(id);
  }
}
