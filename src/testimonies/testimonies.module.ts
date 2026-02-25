import { Module } from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { TestimoniesController } from './testimonies.controller';

@Module({
  controllers: [TestimoniesController],
  providers: [TestimoniesService],
})
export class TestimoniesModule {}
