import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonModule } from './modules/lesson/lesson.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [LessonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
