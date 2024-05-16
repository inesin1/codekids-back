import { Teacher } from 'src/types/teacher';
import { BaseEntity } from './base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { StudentEntity } from './student.entity';
import { CourseEntity } from './course.entity';

@Entity({ name: 'teacher' })
export class TeacherEntity extends BaseEntity {
  @Column()
  name: string;
  course: CourseEntity;

  @OneToMany(() => StudentEntity, (student) => student.teacher)
  students: StudentEntity[];
}
