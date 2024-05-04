import { Student } from "src/types/student";
import { BaseEntity } from "./base.entity";
import { Entity } from "typeorm";
import { Dayjs } from "dayjs";
import { CourseTypes } from "src/types/course-types";
import { Teacher } from "src/types/teacher";
import { LessonEntity } from "./lessson.entity";

@Entity()
export class StudentEntity extends BaseEntity implements Partial<Student> {
    // name: string;
    // birthday: Date;
    // age: number;
    // teacher: Teacher;
    // courses: CourseTypes[];
    // contacts: string;
    lessons: LessonEntity[];
}