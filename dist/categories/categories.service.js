"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
function toSlug(name) {
    return name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        try {
            return this.prisma.category.findMany({
                orderBy: { name: 'asc' },
                include: { _count: { select: { testimonies: true } } },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch categories.');
        }
    }
    async findOne(id) {
        const category = await this.prisma.category.findUnique({
            where: { id },
            include: { _count: { select: { testimonies: true } } },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with id ${id} not found.`);
        }
        return category;
    }
    async findBySlug(slug) {
        const category = await this.prisma.category.findUnique({
            where: { slug: slug.trim().toLowerCase() },
            include: { _count: { select: { testimonies: true } } },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with slug "${slug}" not found.`);
        }
        return category;
    }
    async create(dto) {
        const slug = dto.slug?.trim() || toSlug(dto.name);
        const normalizedSlug = slug.toLowerCase().replace(/\s+/g, '-');
        try {
            const existing = await this.prisma.category.findFirst({
                where: {
                    OR: [
                        { name: { equals: dto.name.trim(), mode: 'insensitive' } },
                        { slug: normalizedSlug },
                    ],
                },
            });
            if (existing) {
                throw new common_1.ConflictException(existing.name.toLowerCase() === dto.name.trim().toLowerCase()
                    ? 'A category with this name already exists.'
                    : 'A category with this slug already exists.');
            }
            return this.prisma.category.create({
                data: {
                    name: dto.name.trim(),
                    slug: normalizedSlug,
                    description: dto.description?.trim() || null,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.ConflictException)
                throw error;
            if (error && typeof error === 'object' && 'code' in error) {
                const code = error.code;
                if (code === 'P2002') {
                    throw new common_1.ConflictException('A category with this name or slug already exists.');
                }
            }
            throw new common_1.InternalServerErrorException('Failed to create category.');
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        const slug = dto.slug?.trim() || (dto.name ? toSlug(dto.name) : undefined);
        const normalizedSlug = slug?.toLowerCase().replace(/\s+/g, '-');
        try {
            return this.prisma.category.update({
                where: { id },
                data: {
                    ...(dto.name && { name: dto.name.trim() }),
                    ...(normalizedSlug && { slug: normalizedSlug }),
                    ...(dto.description !== undefined && { description: dto.description?.trim() || null }),
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            if (error && typeof error === 'object' && 'code' in error) {
                const code = error.code;
                if (code === 'P2002') {
                    throw new common_1.ConflictException('A category with this name or slug already exists.');
                }
            }
            throw new common_1.InternalServerErrorException('Failed to update category.');
        }
    }
    async remove(id) {
        await this.findOne(id);
        try {
            await this.prisma.category.delete({ where: { id } });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to delete category.');
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map