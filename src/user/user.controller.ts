/* eslint-disable prettier/prettier */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userServic: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'me' })
  @ApiUnauthorizedResponse()
  // @Get('me')
  me(@GetUser() user: User) {
    return user['id'];
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'laps' })
  @ApiUnauthorizedResponse()
  // @Get('laps')
  findAll() {
    return this.userServic.findAll();
  }
}
