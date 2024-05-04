import { CourseTypes } from "./course-types"
import { Lesson } from "./lesson"
import { Student } from "./student"

export interface Teacher {
    id: number,
    name: string,
    courses: CourseTypes[]
    students: Student[]
    lessons: Lesson[]
}