import { Teacher } from "src/types/teacher";
import { BaseEntity } from "./base.entity";
import { Entity } from "typeorm";
import { LessonEntity } from "./lessson.entity";

@Entity()
export class TeacherEntity extends BaseEntity implements Partial<Teacher> {
    lessons: LessonEntity[];
}