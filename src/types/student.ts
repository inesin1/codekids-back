import { CourseTypes } from './course-types';
import { Teacher } from './teacher';

export interface Student {
  id: number;
  name: string;
  birthday: Date;
  age: number;
  teacher: Teacher;
  courses: CourseTypes[];
  contacts: string;
}
