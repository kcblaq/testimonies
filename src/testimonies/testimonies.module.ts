import { Module } from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { TestimoniesController } from './testimonies.controller';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [AdminModule],
  controllers: [TestimoniesController],
  providers: [TestimoniesService],
  exports: [TestimoniesService],
})
export class TestimoniesModule {}
