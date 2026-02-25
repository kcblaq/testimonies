import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
export declare class TestimoniesController {
    private readonly testimoniesService;
    constructor(testimoniesService: TestimoniesService);
    create(createTestimonyDto: CreateTestimonyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTestimonyDto: UpdateTestimonyDto): string;
    remove(id: string): string;
}
