import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Injectable()
export class PizzaService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    try {
      return await this.prisma.pizza.findMany({ include: { category: true } });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }

      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async getById(id: string) {
    try {
      const pizza = await this.prisma.pizza.findUnique({
        where: { id },
        include: { category: true },
      });
      if (!pizza) {
        throw new BadRequestException('Пицца не найдена');
      }
      return pizza;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async getByCategoryId(categoryId: string) {
    try {
      const pizzas = await this.prisma.pizza.findMany({
        where: { categoryId },
        include: { category: true },
      });
      if (pizzas.length === 0) {
        throw new BadRequestException('Пиццы не найдены');
      }
      return pizzas;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async createPizza(createPizzaDto: CreatePizzaDto) {
    try {
      return await this.prisma.pizza.create({
        data: createPizzaDto,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }

      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async updatePizza(id: string, updatePizzaDto: UpdatePizzaDto) {
    try {
      const existingPizza = await this.prisma.pizza.findUnique({
        where: { id },
      });
      if (!existingPizza) {
        throw new BadRequestException('Пицца не найдена');
      }
      return await this.prisma.pizza.update({
        where: { id },
        data: updatePizzaDto,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async deletePizza(id: string) {
    try {
      const pizza = await this.prisma.pizza.findUnique({
        where: { id },
      });
      if (!pizza) {
        throw new BadRequestException('Пицца не найдена');
      }
      return await this.prisma.pizza.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  async searchPizzas(query: string) {
    try {
      const pizzas = await this.prisma.pizza.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        },
        include: { category: true },
      });
      if (pizzas.length === 0) {
        throw new BadRequestException('Пиццы не найдены');
      }
      return pizzas;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }

  getPizzasByPriceRange(minPrice: number, maxPrice: number) {
    try {
      return this.prisma.pizza.findMany({
        where: {
          price: {
            gte: minPrice,
            lte: maxPrice,
          },
        },
        include: { category: true },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Неизвестная ошибка');
    }
  }
}
