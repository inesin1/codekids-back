import { Lesson, LessonStatusTypes, PayStatusTypes } from 'src/types/lesson';
import { BaseEntity } from './base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { StudentEntity } from './student.entity';
import { TeacherEntity } from './teacher.entity';
import { CourseEntity } from './course.entity';

@Entity({ name: 'lesson' })
export class LessonEntity extends BaseEntity {
  @Column()
  datetime: Date;

  course: CourseEntity ;

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

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id' })
  student: StudentEntity;

  @ManyToOne(() => TeacherEntity)
  @JoinColumn({ name: 'teacher_id' })
  teacher: TeacherEntity;
}
