import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { PizzaModule } from './pizza/pizza.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CategoryModule, IngredientModule, PizzaModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
