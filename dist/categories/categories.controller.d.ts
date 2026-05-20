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
        slug: string;
        description: string | null;
    })[]>;
    getCategoryTestimonies(idOrSlug: string, query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
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
    getCategoryTestimoniesApproved(idOrSlug: string, query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
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
    getCategoryTestimoniesRejected(idOrSlug: string, query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
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
    getCategoryTestimoniesPending(idOrSlug: string, query: TestimonyQueryDto): Promise<{
        data: ({
            category: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            content: string;
            status: import(".prisma/client").$Enums.ReviewStatus;
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
    findOne(idOrSlug: string): Promise<{
        _count: {
            testimonies: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
    }>;
    private resolveCategoryId;
    create(dto: CreateCategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
    }>;
    update(id: number, dto: UpdateCategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
    }>;
    remove(id: number): Promise<void>;
}
//# sourceMappingURL=categories.controller.d.ts.map