import { IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { LessonStatusTypes, PayStatusTypes } from 'src/types/lesson';

export class CreateLessonDto {
  @IsDate()
  datetime: Date;

  @IsNumber()
  student_id: number;

  @IsNumber()
  teacher_id: number;

  @IsOptional()
  @IsNumber()
  course_id: number;

  @IsOptional()
  @IsEnum(LessonStatusTypes)
  status: LessonStatusTypes;

  @IsOptional()
  @IsEnum(PayStatusTypes)
  pay_status: PayStatusTypes;
}
