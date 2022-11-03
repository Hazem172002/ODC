/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignIn, SignUp, SignUpAdmin } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { userInfo } from 'os';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: SignUp) {
    if (!dto.email) throw new ForbiddenException('email?');
    if (!dto.password) throw new ForbiddenException('password?');
    if (!dto.name) throw new ForbiddenException('name?');
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
          name: dto.name,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: SignIn) {
    if (!dto.email) throw new ForbiddenException('email?');
    if (!dto.password) throw new ForbiddenException('password?');
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException('Bad Email');
    const pwMatch = await argon.verify(user.hash, dto.password);
    if (!pwMatch) throw new ForbiddenException('Bad Password');

    return this.signToken(user.id, user.email);
  }
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
  /*googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User Info from Google',
      user: req.user.id,
    };
  }*/

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const email = req.user.emails[0].value;

    const id: number = req.user.id;
    const name = req.user.name['givenName'];

    const res = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!res) {
      const create = await this.prisma.user.create({
        data: {
          email: email,
          hash: 'as',

          name: name,
        },
      });
      return this.signToken(create.id, create.email);
    } else {
      return this.signToken(res.id, res.email);
    }
  }
  facebookLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User Info from Google',
      user: req.user,
    };
  }
}
