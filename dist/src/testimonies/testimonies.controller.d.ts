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
        };
    } & {
        status: import("../generated/prisma/enums").ReviewStatus;
        views: number;
        shared: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        categoryId: number;
    }>;
    findAll(query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            status: import("../generated/prisma/enums").ReviewStatus;
            views: number;
            shared: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            categoryId: number;
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
            };
        } & {
            status: import("../generated/prisma/enums").ReviewStatus;
            views: number;
            shared: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            categoryId: number;
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
            };
        } & {
            status: import("../generated/prisma/enums").ReviewStatus;
            views: number;
            shared: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            categoryId: number;
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
            };
        } & {
            status: import("../generated/prisma/enums").ReviewStatus;
            views: number;
            shared: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            categoryId: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getFeaturedTestimonies(): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        status: import("../generated/prisma/enums").ReviewStatus;
        views: number;
        shared: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        categoryId: number;
    })[]>;
    findOne(id: number, session: Record<string, any>): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        status: import("../generated/prisma/enums").ReviewStatus;
        views: number;
        shared: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        categoryId: number;
    }>;
    share(id: number): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        status: import("../generated/prisma/enums").ReviewStatus;
        views: number;
        shared: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        categoryId: number;
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
        };
    } & {
        status: import("../generated/prisma/enums").ReviewStatus;
        views: number;
        shared: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        categoryId: number;
    }>;
    remove(id: number): Promise<void>;
}
