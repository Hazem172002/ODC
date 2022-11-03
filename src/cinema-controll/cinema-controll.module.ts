/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CinemaControllController } from './cinema-controll.controller';
import { CinemaControllService } from './cinema-controll.service';

@Module({
  imports: [AuthModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [CinemaControllController],
  providers: [CinemaControllService],
})
export class CinemaControllModule {}
