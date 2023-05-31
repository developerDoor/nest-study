import {Body, Controller, Get, Param, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from "express";

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {} // 이런 패턴을 DI(의존성 주입)이라한다. provider(공급자)가 컨트롤러에게 의존성을 주입해준다.

  @Get('hello/:id/:name')
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    return this.appService.getHello();
  }
}
