import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { AdminModule } from '../admin/admin.module';
import { TestimoniesModule } from '../testimonies/testimonies.module';

@Module({
  imports: [AdminModule, TestimoniesModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
