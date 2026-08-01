import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreatePizzaDto {
  @ApiProperty({ example: 'Маргарита', description: 'Название пиццы' })
  @IsString({ message: 'Название пиццы должно быть строкой' })
  title!: string;

  @ApiProperty({
    example: '76652aa1-c93f-4c25-bab8-8ec75fc09e41',
    description: 'ID категории пиццы',
  })
  @IsUUID('4', { message: 'ID категории пиццы должен быть UUID' })
  categoryId!: string;

  @ApiProperty({
    example: 'Классическая пицца с.tomatным соусом и моцареллой',
    description: 'Описание пиццы',
  })
  @IsString({ message: 'Описание пиццы должно быть строкой' })
  description!: string;

  @ApiProperty({ example: 999, description: 'Цена пиццы' })
  @IsNumber({}, { message: 'Цена пиццы должна быть числом' })
  price!: number;

  @ApiProperty({ example: 'margarita.jpg', description: 'Изображение пиццы' })
  @IsString({ message: 'Изображение пиццы должно быть строкой' })
  image!: string;
}
