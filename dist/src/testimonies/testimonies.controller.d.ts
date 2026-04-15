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
        title: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
    }>;
    findAll(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        title: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
    })[]>;
    findAllApproved(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        title: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
    })[]>;
    findAllRejected(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        title: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
    })[]>;
    findAllPending(categoryId?: string, categorySlug?: string): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        title: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } & {
        title: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
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
        title: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
    }>;
    remove(id: number): Promise<void>;
}
