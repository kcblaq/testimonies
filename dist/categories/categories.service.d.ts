import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
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
    findBySlug(slug: string): Promise<{
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
