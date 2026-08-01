import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsNumber, IsString } from 'class-validator';

export class CreateIngredientDto {
  @ApiProperty({ example: 'Томаты' })
  @IsString({ message: 'Ингредиент должен быть строкой' })
  value!: string;

  @ApiProperty({ example: ['image.png'] })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ message: 'Изображение должно быть строкой', each: true })
  image!: string[];

  @ApiProperty({ example: 79.9 })
  @IsNumber({}, { message: 'Цена должна быть номером' })
  price!: number;
}
