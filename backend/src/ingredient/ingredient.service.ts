import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIngredientDto } from './dto/create-ingredient';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

@Injectable()
export class IngredientService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    try {
      return await this.prisma.ingredients.findMany();
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }

      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async create(createIngredientDto: CreateIngredientDto) {
    try {
      return await this.prisma.ingredients.create({
        data: createIngredientDto,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code) {
          throw new BadRequestException('Такой ингредиент уже существует');
        }
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }
}
