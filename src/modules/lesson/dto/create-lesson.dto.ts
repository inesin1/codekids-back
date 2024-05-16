import { IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { CourseEntity } from 'src/modules/database/entities/course.entity';
import { Lesson, LessonStatusTypes, PayStatusTypes } from 'src/types/lesson';

export class CreateLessonDto implements Partial<Lesson> {
  @IsDate()
  datetime: Date;

  @IsNumber()
  student_id: number;

  @IsNumber()
  teacher_id: number;

  @IsOptional()
  @IsEnum(CourseEntity)
  course: CourseEntity;

  @IsOptional()
  @IsEnum(LessonStatusTypes)
  status: LessonStatusTypes;

  @IsOptional()
  @IsEnum(PayStatusTypes)
  pay_status: PayStatusTypes;
}
