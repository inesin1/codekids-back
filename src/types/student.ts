import { Dayjs } from "dayjs";
import { CourseTypes } from "./course-types";
import { Teacher } from "./teacher";
import { Lesson } from "./lesson";

export interface Student {
    id: number,
    name: string,
    birthday: Date
    age: number
    teacher: Teacher,
    courses: CourseTypes[]
    contacts: string
    lessons: Lesson[]
}