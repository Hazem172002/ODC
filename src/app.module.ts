/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

import { PopularModule } from './popular/popular.module';
import { CinemaControllModule } from './cinema-controll/cinema-controll.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PopularModule,
    CinemaControllModule,
  ],
})
export class AppModule {}
