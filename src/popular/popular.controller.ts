/* eslint-disable prettier/prettier */
import { Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { PopularService } from './popular.service';

@ApiTags('Popular')
@Controller('popular')
export class PopularController {
  constructor(private popularService: PopularService) {}

  //get from TDM

  @Cron('1 58 23 * * *', {
    name: '',
    timeZone: 'Europe/Paris',
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'now playing' })
  @ApiUnauthorizedResponse()
  @Post('newPlaying')
  newPlaying() {
    return this.popularService.newPlaying();
  }

  @Cron('1 58 23 * * *', {
    name: '',
    timeZone: 'Europe/Paris',
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'upcoming' })
  @ApiUnauthorizedResponse()
  @Get('upComing')
  upComing() {
    return this.popularService.upComing();
  }
  //END GET FROM TDM
  //Get tdm to my wep
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'get nowplaying' })
  @ApiUnauthorizedResponse()
  @Get('getNowPlaying')
  getNowPlaying() {
    return this.popularService.getNowPlaying();
  }
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access_token')
  @ApiCreatedResponse({ description: 'get upcoming' })
  @ApiUnauthorizedResponse()
  @Get('getUpComing')
  getUpComing() {
    return this.popularService.getUpComing();
  }

  //end

  @Cron('1 59 23 * * *', {
    name: '',
    timeZone: 'Europe/Paris',
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'shedule' })
  @ApiUnauthorizedResponse()
  @Get('shedule')
  shedule() {
    return this.popularService.shedule();
  }
  @Cron('1 58 23 * * *', {
    name: '',
    timeZone: 'Europe/Paris',
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'drop shedule' })
  @ApiUnauthorizedResponse()
  // @Get('dropShedule')
  dropShedule() {
    return this.popularService.dropShedule();
  }
}
