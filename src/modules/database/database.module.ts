import { Module } from '@nestjs/common';
import { LessonRepository } from './repositories/lesson.repository';
import { LessonEntity } from './entities/lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { TeacherRepository } from './repositories/teacher.repository';
import { StudentRepository } from './repositories/student.repository';
import { TeacherEntity } from './entities/teacher.entity';
import { StudentEntity } from './entities/student.entity';

const providers = [LessonRepository, TeacherRepository, StudentRepository];
const models = [LessonEntity, TeacherEntity, StudentEntity];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          type: 'postgres',
          host: config.get('DB_HOST'),
          port: config.get('DB_PORT'),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_DATABASE'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    TypeOrmModule.forFeature([...models]),
  ],
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
