import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get('all')
  getAllPizzas() {
    return this.pizzaService.getAll();
  }

  @Get('by-id/:id')
  getPizzaById(@Param('id') id: string) {
    return this.pizzaService.getById(id);
  }

  @Get('by-category/:categoryId')
  getPizzasByCategoryId(@Param('categoryId') categoryId: string) {
    return this.pizzaService.getByCategoryId(categoryId);
  }

  @Post('create')
  createPizza(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzaService.createPizza(createPizzaDto);
  }

  @Put('update/:id')
  updatePizza(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzaService.updatePizza(id, updatePizzaDto);
  }

  @Delete('delete/:id')
  deletePizza(@Param('id') id: string) {
    return this.pizzaService.deletePizza(id);
  }

  @Get('search/:query')
  searchPizzas(@Param('query') query: string) {
    return this.pizzaService.searchPizzas(query);
  }

  @Get('by-price-range/:minPrice/:maxPrice')
  getPizzasByPriceRange(
    @Param('minPrice') minPrice: number,
    @Param('maxPrice') maxPrice: number,
  ) {
    return this.pizzaService.getPizzasByPriceRange(minPrice, maxPrice);
  }
}
