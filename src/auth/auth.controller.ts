/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';

import { SignIn, SignUp, SignUpAdmin } from './dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiCreatedResponse({ description: 'User Registration' })
  @ApiBody({ type: SignUp })
  @ApiUnauthorizedResponse()
  signup(@Body() dto: SignUp) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  @ApiOkResponse({ description: 'User Signin' })
  @ApiUnauthorizedResponse({ description: 'Invaild credentials' })
  @ApiBody({ type: SignIn })
  signin(@Body() dto: SignIn) {
    return this.authService.signin(dto);
  }

  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}
  @Post('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }

  //@Post('auth/facebook/callback')
  @UseGuards(AuthGuard('facebook-token'))
  facebookAuthRedirect(@Req() req) {
    return this.authService.facebookLogin(req);
  }
}
