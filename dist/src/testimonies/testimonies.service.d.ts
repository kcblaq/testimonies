import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
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
        authorName: string;
        authorEmail: string;
        categoryId: number | null;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    }>;
    findAll(categoryId?: number): Promise<({
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
        authorName: string;
        authorEmail: string;
        categoryId: number | null;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    })[]>;
    findAllApproved(categoryId?: number): Promise<({
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
        authorName: string;
        authorEmail: string;
        categoryId: number | null;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    })[]>;
    findAllRejected(categoryId?: number): Promise<({
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
        authorName: string;
        authorEmail: string;
        categoryId: number | null;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
    })[]>;
    findAllPending(categoryId?: number): Promise<({
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
        authorName: string;
        authorEmail: string;
        categoryId: number | null;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
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
        title: string;
        content: string;
        authorName: string;
        authorEmail: string;
        categoryId: number | null;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
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
        authorName: string;
        authorEmail: string;
        categoryId: number | null;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
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
