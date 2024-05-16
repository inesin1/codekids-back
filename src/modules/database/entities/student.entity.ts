import { BaseEntity } from './base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TeacherEntity } from './teacher.entity';
import { CourseEntity } from './course.entity';

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

  course: CourseEntity;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.students)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;
}
