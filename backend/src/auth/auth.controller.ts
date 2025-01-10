// src/auth/auth.controller.ts (Example)
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login') // The login endpoint
  async login(@Body() user: any) { // Replace 'any' with your User DTO
    // 1. Validate the user credentials (e.g., check against a database)
    if (user.username === 'test' && user.password === 'test') { // Replace with actual validation
      const payload = { username: user.username, sub: user.id || 1 }; // sub is usually the user ID
      return this.authService.generateToken(payload);
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}