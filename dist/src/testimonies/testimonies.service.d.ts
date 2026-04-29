import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { TestimonyQueryDto } from './dto/testimony-query.dto';
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
    private buildWhereClause;
    private paginate;
    findAll(query: TestimonyQueryDto, categoryId?: number): Promise<{
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
    findAllApproved(query: TestimonyQueryDto, categoryId?: number): Promise<{
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
    findAllRejected(query: TestimonyQueryDto, categoryId?: number): Promise<{
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
    findAllPending(query: TestimonyQueryDto, categoryId?: number): Promise<{
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
    findOneAndIncrementViews(id: number, viewedTestimonies: number[]): Promise<{
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
    update(id: number, updateTestimonyDto: UpdateTestimonyDto, adminEmail?: string): Promise<{
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
    incrementShares(id: number): Promise<{
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
}
