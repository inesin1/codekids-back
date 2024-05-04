import { Lesson, LessonStatusTypes, PayStatusTypes } from 'src/types/lesson';
import { BaseEntity } from './base.entity';
import { CourseTypes } from 'src/types/course-types';
import { Student } from 'src/types/student';
import { Teacher } from 'src/types/teacher';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { StudentEntity } from './student.entity';
import { TeacherEntity } from './teacher.entity';

@Entity()
export class LessonEntity extends BaseEntity implements Partial<Lesson> {
  @Column()
  datetime: Date;

  @Column({
    type: 'enum',
    enum: CourseTypes,
    nullable: true,
  })
  course: CourseTypes;

  @Column({
    type: 'enum',
    enum: LessonStatusTypes,
    default: LessonStatusTypes.Assigned,
  })
  status: LessonStatusTypes;

  @Column({
    type: 'enum',
    enum: PayStatusTypes,
    default: PayStatusTypes.NotPaid,
  })
  pay_status: PayStatusTypes;

  @ManyToOne((type) => StudentEntity, (student) => student.lessons)
  @JoinColumn({ name: 'student_id' })
  student: StudentEntity;

  @ManyToOne((type) => TeacherEntity, (teacher) => teacher.lessons)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;
}
