import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import type { Response } from 'express';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return this.authService.register(createUserDto, res);
  }

  @Post('authenticate')
  authenticate(@Body() authDto: AuthDto, @Res() res: Response) {
    return this.authService.authenticate(authDto.email, authDto.password, res);
  }
}
