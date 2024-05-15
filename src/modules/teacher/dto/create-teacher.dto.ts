import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CourseTypes } from 'src/types/course-types';
import { Teacher } from 'src/types/teacher';


export class CreateTeacherDto implements Partial<Teacher> {
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(CourseTypes)
  courses: CourseTypes[]
}
