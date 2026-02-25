import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';

@Controller('testimonies')
export class TestimoniesController {
  constructor(private readonly testimoniesService: TestimoniesService) {}

  @Post()
  create(@Body() createTestimonyDto: CreateTestimonyDto) {
    return this.testimoniesService.create(createTestimonyDto);
  }

  @Get()
  findAll() {
    return this.testimoniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testimoniesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestimonyDto: UpdateTestimonyDto) {
    return this.testimoniesService.update(+id, updateTestimonyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testimoniesService.remove(+id);
  }
}
