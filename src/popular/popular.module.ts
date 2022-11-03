import { Module } from '@nestjs/common';
import { PopularService } from './popular.service';
import { PopularController } from './popular.controller';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [HttpModule, ScheduleModule.forRoot()],
  providers: [PopularService, HttpModule],
  controllers: [PopularController],
})
export class PopularModule {}
