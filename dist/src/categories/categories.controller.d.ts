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
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
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
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
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
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
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
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
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
        content: string;
        title: string;
        authorEmail: string;
        authorName: string;
        status: import(".prisma/client").$Enums.ReviewStatus;
        updatedByEmail: string | null;
        categoryId: number | null;
    })[]>;
    findOne(idOrSlug: string): Promise<{
        _count: {
            testimonies: number;
        };
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    }>;
    private resolveCategoryId;
    create(dto: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    }>;
    update(id: number, dto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    }>;
    remove(id: number): Promise<void>;
}
