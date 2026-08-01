import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [PrismaModule, CategoryModule, IngredientModule, PizzaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
