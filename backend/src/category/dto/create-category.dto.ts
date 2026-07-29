import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Острая' })
  @IsString({ message: 'Категория должна быть строкой' })
  value!: string;
}
