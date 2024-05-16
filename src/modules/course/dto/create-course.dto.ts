import { IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    name: string;
}
