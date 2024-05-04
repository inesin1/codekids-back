import { Dayjs } from 'dayjs';
import { Student } from './student';
import { Teacher } from './teacher';
import { CourseTypes } from './course-types';

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
  student: Student;
  teacher: Teacher;
  course: CourseTypes;
  status: LessonStatusTypes;
  pay_status: PayStatusTypes;
}
