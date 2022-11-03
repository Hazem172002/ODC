/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CinemaControllService } from './cinema-controll.service';
import { Request } from 'express';
import { seatchDto, ticketDto } from './dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SignUp } from 'src/auth/dto';

@ApiTags('Cinema Control')
@Controller('cinema-controll')
export class CinemaControllController {
  constructor(private cinema: CinemaControllService) {}
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'hall shedule' })
  @ApiUnauthorizedResponse()
  @Get('hallShedule')
  hallShedule() {
    return this.cinema.hallShedule();
  }
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'ticket' })
  @ApiUnauthorizedResponse()
  @Post('ticket')
  ticket(@Body() dto: ticketDto, @Req() req: Request) {
    return this.cinema.ticket(dto, req);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'my tickets' })
  @ApiUnauthorizedResponse()
  @Post('myTickets')
  mytickets(@Req() req: Request) {
    return this.cinema.myTickets(req);
  }
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'search' })
  @ApiUnauthorizedResponse()
  @Post('search')
  search(@Body() dto: seatchDto) {
    return this.cinema.search(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'hall a' })
  @ApiUnauthorizedResponse()
  @Post('hallA')
  hallA() {
    return this.cinema.hallA();
  }
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'hall b' })
  @ApiUnauthorizedResponse()
  @Post('hallB')
  hallB() {
    return this.cinema.hallB();
  }
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'hall c' })
  @ApiUnauthorizedResponse()
  @Post('hallC')
  hallC() {
    return this.cinema.hallC();
  }
}
