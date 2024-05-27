import { Dayjs } from 'dayjs';
import { Student } from './student';
import { Teacher } from './teacher';
import { CourseEntity } from 'src/modules/database/entities/course.entity';

export enum LessonStatusTypes {
  Assigned = 'Назначен',
  Completed = 'Проведен',
  Canceled = 'Отменен',
  Rescheduled = 'Перенесен',
}

export enum PayStatusTypes {
  NotPaid = 'Не оплачен',
  Paid = 'Оплачен',
}

export interface Lesson {
  id: number;
  datetime: Date;
  student_id: number;
  student: Student;
  teacher_id: number;
  teacher: Teacher;
  course: CourseEntity;
  status: LessonStatusTypes;
  pay_status: PayStatusTypes;
  comment?: string;
}
