import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CourseTypes } from 'src/types/course-types';
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
  @IsEnum(CourseTypes)
  courses: CourseTypes[];

  @IsOptional()
  @IsString()
  contacts: string;
}
