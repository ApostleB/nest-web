import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {

  @Get("/hello")
  getHello(@Req() request: Request): string {
    console.log(request.query);
    return "TEST";
  }

}
