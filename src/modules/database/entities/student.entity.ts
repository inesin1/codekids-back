import { Student } from 'src/types/student';
import { BaseEntity } from './base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CourseTypes } from 'src/types/course-types';
import { TeacherEntity } from './teacher.entity';

@Entity({name: 'student'})
export class StudentEntity extends BaseEntity{
  @Column()
  name: string;

  @Column()
  birthday: Date;

  @Column()
  age: number;

  @Column()
  contacts: string;

  @Column({
    type: 'enum',
    array: true,
    enum: CourseTypes,
    nullable: true,
  })
  courses: CourseTypes[];

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.students)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;
}
