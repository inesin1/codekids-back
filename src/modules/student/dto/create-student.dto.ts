import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CourseEntity } from 'src/modules/database/entities/course.entity';
import { TeacherEntity } from 'src/modules/database/entities/teacher.entity';

import { Student } from 'src/types/student';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsDate()
  birthday: Date;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  teacher_id: number;

  @IsOptional()
  course_id: number;

  @IsOptional()
  @IsString()
  contacts: string;
}
