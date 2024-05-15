import { Teacher } from 'src/types/teacher';
import { BaseEntity } from './base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { CourseTypes } from 'src/types/course-types';
import { StudentEntity } from './student.entity';

@Entity({ name: 'teacher' })
export class TeacherEntity extends BaseEntity implements Partial<Teacher> {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    array: true,
    enum: CourseTypes,
    nullable: true,
  })
  courses: CourseTypes[];

  @OneToMany(() => StudentEntity, (student) => student.teacher)
  students: StudentEntity[];
}
