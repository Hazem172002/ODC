/* eslint-disable prettier/prettier */
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-facebook-token';

import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(
  Strategy,
  'facebook-token',
) {
  constructor() {
    super({
      clientID: '1583701042046117',
      clientSecret: 'ced1f50d2bd9434c143c49ea8a155f00',

      authorizationURL: 'http:localhost:3000/facebook',
      tokenURL: 'njcasncaj',
      //callbackURL: 'http://localhost:3000/auth/facebook/callback',
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    /*const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);*/

    done(null, profile);
  }
}
