import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
export declare class TestimoniesService {
    create(createTestimonyDto: CreateTestimonyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestimonyDto: UpdateTestimonyDto): string;
    remove(id: number): string;
}
