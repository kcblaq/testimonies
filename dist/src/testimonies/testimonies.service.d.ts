import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
export declare class TestimoniesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    update(id: number, updateTestimonyDto: UpdateTestimonyDto, adminEmail?: string): Promise<{
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
