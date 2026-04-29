import { CategoriesService } from './categories.service';
import { TestimoniesService } from '../testimonies/testimonies.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { TestimonyQueryDto } from '../testimonies/dto/testimony-query.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    private readonly testimoniesService;
    constructor(categoriesService: CategoriesService, testimoniesService: TestimoniesService);
    findAll(): Promise<({
        _count: {
            testimonies: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        slug: string;
    })[]>;
    getCategoryTestimonies(idOrSlug: string, query: TestimonyQueryDto): Promise<{
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
    getCategoryTestimoniesApproved(idOrSlug: string, query: TestimonyQueryDto): Promise<{
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
    getCategoryTestimoniesRejected(idOrSlug: string, query: TestimonyQueryDto): Promise<{
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
    getCategoryTestimoniesPending(idOrSlug: string, query: TestimonyQueryDto): Promise<{
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
    findOne(idOrSlug: string): Promise<{
        _count: {
            testimonies: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        slug: string;
    }>;
    private resolveCategoryId;
    create(dto: CreateCategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        slug: string;
    }>;
    update(id: number, dto: UpdateCategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        slug: string;
    }>;
    remove(id: number): Promise<void>;
}
