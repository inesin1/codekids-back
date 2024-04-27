import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonModule } from './modules/lesson/lesson.module';

@Module({
  imports: [LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
