import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { TestimonyQueryDto } from './dto/testimony-query.dto';
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
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    }>;
    findAll(query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            } | null;
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            updatedByEmail: string | null;
            categoryId: number | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllApproved(query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            } | null;
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            updatedByEmail: string | null;
            categoryId: number | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllRejected(query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            } | null;
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            updatedByEmail: string | null;
            categoryId: number | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllPending(query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            } | null;
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            updatedByEmail: string | null;
            categoryId: number | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
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
        title: string;
        content: string;
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
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    }>;
    remove(id: number): Promise<void>;
}
