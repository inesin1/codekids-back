import { CourseEntity } from 'src/modules/database/entities/course.entity';
import { Teacher } from './teacher';

export interface Student {
  id: number;
  name: string;
  birthday: Date;
  age: number;
  teacher_id: number
  teacher: Teacher;
  course: CourseEntity;
  contacts: string;
}
