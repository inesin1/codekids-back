import { Course } from "./course"
import { Student } from "./student"

export interface Teacher {
    id: number,
    name: string,
    courses: Course[]
    students: Student[]
}