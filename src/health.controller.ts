import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class HealthController {
  @Get()
  ping() {
    return 'pong';
  }
}
