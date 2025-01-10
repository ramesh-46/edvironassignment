import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(payload: any) { // payload should be user info
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}