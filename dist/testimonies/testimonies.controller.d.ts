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
        title: string;
        content: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        createdAt: Date;
        updatedAt: Date;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        id: number;
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
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            createdAt: Date;
            updatedAt: Date;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            id: number;
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
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            createdAt: Date;
            updatedAt: Date;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            id: number;
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
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            createdAt: Date;
            updatedAt: Date;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            id: number;
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
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
            createdAt: Date;
            updatedAt: Date;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            id: number;
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
        title: string;
        content: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        createdAt: Date;
        updatedAt: Date;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        id: number;
        categoryId: number;
    })[]>;
    findOne(id: number, session: Record<string, any>): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        title: string;
        content: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        createdAt: Date;
        updatedAt: Date;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        id: number;
        categoryId: number;
    }>;
    share(id: number): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        title: string;
        content: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        createdAt: Date;
        updatedAt: Date;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        id: number;
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
        title: string;
        content: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        createdAt: Date;
        updatedAt: Date;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        id: number;
        categoryId: number;
    }>;
    remove(id: number): Promise<void>;
}
//# sourceMappingURL=testimonies.controller.d.ts.map