import { CategoriesService } from './categories.service';
import { TestimoniesService } from '../testimonies/testimonies.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
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
        name: string;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getCategoryTestimonies(idOrSlug: string): Promise<({
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
        categoryId: number | null;
        updatedByEmail: string | null;
    })[]>;
    getCategoryTestimoniesApproved(idOrSlug: string): Promise<({
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
        categoryId: number | null;
        updatedByEmail: string | null;
    })[]>;
    getCategoryTestimoniesRejected(idOrSlug: string): Promise<({
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
        categoryId: number | null;
        updatedByEmail: string | null;
    })[]>;
    getCategoryTestimoniesPending(idOrSlug: string): Promise<({
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
        categoryId: number | null;
        updatedByEmail: string | null;
    })[]>;
    findOne(idOrSlug: string): Promise<{
        _count: {
            testimonies: number;
        };
    } & {
        id: number;
        name: string;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private resolveCategoryId;
    create(dto: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, dto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<void>;
}
