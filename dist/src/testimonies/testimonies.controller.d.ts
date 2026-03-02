import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
export declare class TestimoniesController {
    private readonly testimoniesService;
    constructor(testimoniesService: TestimoniesService);
    create(createTestimonyDto: CreateTestimonyDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }[]>;
    findAllApproved(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }[]>;
    findAllRejected(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }[]>;
    findAllPending(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }>;
    update(id: number, updateTestimonyDto: UpdateTestimonyDto, req: {
        user: {
            email: string;
        };
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }>;
    remove(id: number): Promise<void>;
}
