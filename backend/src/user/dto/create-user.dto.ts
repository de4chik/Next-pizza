import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Евгений', description: 'Имя пользователя' })
  @IsString({ message: 'Имя пользователя должно быть строкой' })
  name!: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Почта пользователя',
  })
  @IsEmail({}, { message: 'Некорректный email' })
  email!: string;

  @ApiProperty({
    example: 'P@ssw0rd!',
    description: 'Пароль пользователя',
  })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      always: true,
      message:
        'Пароль должен содержать минимум 8 символов, включая хотя бы одну строчную букву, одну заглавную букву, одну цифру и один специальный символ',
    },
  )
  password!: string;
}
