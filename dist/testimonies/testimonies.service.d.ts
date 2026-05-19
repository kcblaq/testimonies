import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { TestimonyQueryDto } from './dto/testimony-query.dto';
import { ReviewStatus } from "../generated/prisma/enums";
export declare class TestimoniesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private includeCategory;
    resolveCategoryId(categoryId?: number, categorySlug?: string): Promise<number | undefined>;
    create(createTestimonyDto: CreateTestimonyDto): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        content: string;
        status: ReviewStatus;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        categoryId: number;
    }>;
    private buildWhereClause;
    private paginate;
    findAll(query: TestimonyQueryDto, categoryId?: number): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            content: string;
            status: ReviewStatus;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            categoryId: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllApproved(query: TestimonyQueryDto, categoryId?: number): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            content: string;
            status: ReviewStatus;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            categoryId: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllRejected(query: TestimonyQueryDto, categoryId?: number): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            content: string;
            status: ReviewStatus;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            categoryId: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllPending(query: TestimonyQueryDto, categoryId?: number): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            content: string;
            status: ReviewStatus;
            authorEmail: string;
            authorName: string;
            updatedByEmail: string | null;
            isFeatured: boolean;
            featuredAt: Date | null;
            views: number;
            shared: number;
            categoryId: number;
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
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        content: string;
        status: ReviewStatus;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        categoryId: number;
    }>;
    findOneAndIncrementViews(id: number, viewedTestimonies: number[]): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        content: string;
        status: ReviewStatus;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        categoryId: number;
    }>;
    update(id: number, updateTestimonyDto: UpdateTestimonyDto, adminEmail?: string): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        content: string;
        status: ReviewStatus;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        categoryId: number;
    }>;
    incrementShares(id: number): Promise<{
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        content: string;
        status: ReviewStatus;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        categoryId: number;
    }>;
    remove(id: number): Promise<void>;
    approveMany(ids: number[]): Promise<{
        message: string;
    }>;
    rejectMany(ids: number[]): Promise<{
        message: string;
    }>;
    deleteMany(ids: number[]): Promise<{
        message: string;
    }>;
    deleteAll(): Promise<{
        message: string;
    }>;
    featuredTestimonies(): Promise<({
        category: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        content: string;
        status: ReviewStatus;
        authorEmail: string;
        authorName: string;
        updatedByEmail: string | null;
        isFeatured: boolean;
        featuredAt: Date | null;
        views: number;
        shared: number;
        categoryId: number;
    })[]>;
}
