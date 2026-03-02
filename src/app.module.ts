import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TestimoniesModule } from './testimonies/testimonies.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AdminModule, TestimoniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
