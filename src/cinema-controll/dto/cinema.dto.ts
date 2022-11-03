/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  isNotEmpty,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class ticketDto {
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'ids' })
  ids: number;
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'time' })
  time: number;
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'seat' })
  seat: string;
}

export class seatchDto {
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'title' })
  title: string;
}
