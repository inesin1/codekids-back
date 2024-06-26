import { IsArray, IsOptional, IsString } from 'class-validator';
import { CourseEntity } from 'src/modules/database/entities/course.entity';
import { Teacher } from 'src/types/teacher';

export class CreateTeacherDto implements Partial<Teacher> {
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  courses_ids: number[];
}
