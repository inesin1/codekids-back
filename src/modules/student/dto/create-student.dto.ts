import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CourseEntity } from 'src/modules/database/entities/course.entity';

import { Student } from 'src/types/student';

export class CreateStudentDto implements Partial<Student> {
  @IsString()
  name: string;

  @IsOptional()
  @IsDate()
  birthday: Date;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsNumber()
  teacher_id: number;

  @IsOptional()
  @IsEnum(CourseEntity)
  course: CourseEntity;

  @IsOptional()
  @IsString()
  contacts: string;
}
