/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUp {
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'password' })
  password: string;
}
export class SignIn {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'password' })
  password: string;
}

export class SignUpAdmin {
  @IsNotEmpty()
  user_type: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
