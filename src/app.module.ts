import { Module } from '@nestjs/common';
import { LessonModule } from './modules/lesson/lesson.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { CourseModule } from './modules/course/course.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LessonModule,
    TeacherModule,
    StudentModule,
    DatabaseModule,
    CourseModule,
  ],
})
export class AppModule {}
