import { BadRequestException, Injectable, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { TokenService } from 'src/token/token.service';
import type { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async register(createUserDto: CreateUserDto, res: Response) {
    try {
      const findUser = await this.userService.getUserByEmail(
        createUserDto.email,
      );

      if (!!findUser) {
        throw new BadRequestException(
          'Пользователь с таким email уже существует',
        );
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

      const newUser = await this.userService.createUser({
        ...createUserDto,
        password: hashedPassword,
      });

      const tokens = await this.tokenService.generateTokens({
        id: newUser.id,
        email: newUser.email,
      });
      res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
      return res.json({ accessToken: tokens.accessToken, user: newUser });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code) {
          throw new BadRequestException('Такой пользователь уже существует');
        }
      }
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async authenticate(email: string, password: string, res: Response) {
    try {
      const findUser = await this.userService.getUserByEmail(email);
      if (!findUser) {
        throw new BadRequestException('Не верный email или пароль');
      }
      const isPasswordValid = bcrypt.compareSync(password, findUser.password);
      if (!isPasswordValid) {
        throw new BadRequestException('Не верный email или пароль');
      }
      const tokens = await this.tokenService.generateTokens({
        id: findUser.id,
        email: findUser.email,
      });
      res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
      return res.json({ accessToken: tokens.accessToken, user: findUser });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code) {
          throw new BadRequestException('Такой пользователь уже существует');
        }
      }
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }
}
