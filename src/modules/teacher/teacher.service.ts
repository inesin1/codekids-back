import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherRepository } from '../database/repositories/teacher.repository';
import { QueryOptions } from 'src/types/query-options';
import { Like } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(private teacherRepository: TeacherRepository) {}

  create(createTeacherDto: CreateTeacherDto) {
    const { courses_ids } = createTeacherDto;
    return this.teacherRepository.save({
      ...createTeacherDto,
      courses: courses_ids.map((c) => ({ id: c })),
    });
  }

  findAll(queryOptions: QueryOptions) {
    return this.teacherRepository.findAll({
      where: queryOptions.search
        ? { name: Like(`%${queryOptions.search}%`) }
        : undefined,
      skip: queryOptions.page,
      take: queryOptions.limit,
      relations: queryOptions.with,
      order: {
        id: 'DESC',
      },
    });
  }

  findOne(id: number, queryOptions: QueryOptions) {
    return this.teacherRepository.findOne({
      where: { id },
      relations: queryOptions.with,
    });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherRepository.update(id, {
      ...updateTeacherDto,
    });
  }

  remove(id: number) {
    return this.teacherRepository.remove(id);
  }
}
