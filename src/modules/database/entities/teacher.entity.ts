import { Teacher } from 'src/types/teacher';
import { BaseEntity } from './base.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { StudentEntity } from './student.entity';
import { CourseEntity } from './course.entity';

@Entity({ name: 'teacher' })
export class TeacherEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => CourseEntity, { cascade: true })
  @JoinTable()
  courses: CourseEntity[];

  @OneToMany(() => StudentEntity, (student) => student.teacher)
  students: StudentEntity[];
}
