import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // No path prefix means it's the root controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // This handles GET requests to /
  getHello(): string {
    return this.appService.getHello();
  }
}