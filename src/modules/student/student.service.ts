import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentRepository } from '../database/repositories/student.repository';
import { QueryOptions } from 'src/types/query-options';
import { Like } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  create(createStudentDto: CreateStudentDto) {
    const { teacher_id } = createStudentDto;
    return this.studentRepository.save({
      ...createStudentDto,
      teacher: { id: teacher_id },
    });
  }

  findAll(queryOptions: QueryOptions) {
    return this.studentRepository.findAll({
      where: queryOptions.search
        ? { name: Like(`%${queryOptions.search}%`) }
        : undefined,
      skip: queryOptions.page,
      take: queryOptions.limit,
      relations: queryOptions.with,
    });
  }

  findOne(id: number, queryOptions: QueryOptions) {
    return this.studentRepository.findOne({
      where: { id },
      relations: queryOptions.with,
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const { teacher_id } = updateStudentDto;
    return this.studentRepository.update(id, {
      ...updateStudentDto,
      teacher: { id: teacher_id },
    });
  }

  remove(id: number) {
    return this.studentRepository.remove(id);
  }
}
