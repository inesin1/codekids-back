import { BaseEntity } from './base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { StudentEntity } from './student.entity';
import { Course } from 'src/types/course';

@Entity({ name: 'course' })
export class CourseEntity extends BaseEntity {
  @Column()
  name: string;
}
