import { IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { CourseTypes } from 'src/types/course-types';
import { Lesson, LessonStatusTypes, PayStatusTypes } from 'src/types/lesson';

export class CreateLessonDto implements Partial<Lesson> {
  @IsDate()
  datetime: Date;

  @IsNumber()
  student_id: number;

  @IsNumber()
  teacher_id: number;

  @IsOptional()
  @IsEnum(CourseTypes)
  course: CourseTypes;

  @IsOptional()
  @IsEnum(LessonStatusTypes)
  status: LessonStatusTypes;

  @IsOptional()
  @IsEnum(PayStatusTypes)
  pay_status: PayStatusTypes;
}
