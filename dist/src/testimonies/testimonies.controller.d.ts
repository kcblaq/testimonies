import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
export declare class TestimoniesController {
    private readonly testimoniesService;
    constructor(testimoniesService: TestimoniesService);
    create(createTestimonyDto: CreateTestimonyDto): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    }>;
    findAll(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    })[]>;
    findAllApproved(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    })[]>;
    findAllRejected(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    })[]>;
    findAllPending(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    }>;
    update(id: number, updateTestimonyDto: UpdateTestimonyDto, req: {
        user: {
            email: string;
        };
    }): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    }>;
    remove(id: number): Promise<void>;
}
