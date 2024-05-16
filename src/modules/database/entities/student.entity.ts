import { BaseEntity } from './base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TeacherEntity } from './teacher.entity';
import { CourseEntity } from './course.entity';

@Entity({ name: 'student' })
export class StudentEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  contacts: string;

  @ManyToOne(() => CourseEntity)
  @JoinColumn({ name: 'course_id' })
  course: CourseEntity;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.students)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;
}
