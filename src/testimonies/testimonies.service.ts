import { Injectable } from '@nestjs/common';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';

@Injectable()
export class TestimoniesService {
  create(createTestimonyDto: CreateTestimonyDto) {
    return 'This action adds a new testimony';
  }

  findAll() {
    return `This action returns all testimonies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testimony`;
  }

  update(id: number, updateTestimonyDto: UpdateTestimonyDto) {
    return `This action updates a #${id} testimony`;
  }

  remove(id: number) {
    return `This action removes a #${id} testimony`;
  }
}
