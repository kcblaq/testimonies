var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReviewStatus } from 'src/generated/prisma/enums';
let TestimoniesService = class TestimoniesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    includeCategory = { category: { select: { id: true, name: true, slug: true } } };
    async resolveCategoryId(categoryId, categorySlug) {
        if (categorySlug != null && categorySlug.trim() !== '') {
            const category = await this.prisma.category.findUnique({
                where: { slug: categorySlug.trim().toLowerCase() },
            });
            if (!category) {
                throw new NotFoundException(`Category with slug "${categorySlug}" not found.`);
            }
            return category.id;
        }
        return categoryId;
    }
    async create(createTestimonyDto) {
        if (createTestimonyDto.categoryId != null) {
            const category = await this.prisma.category.findUnique({
                where: { id: createTestimonyDto.categoryId },
            });
            if (!category) {
                throw new BadRequestException(`Category with id ${createTestimonyDto.categoryId} not found.`);
            }
        }
        try {
            const testimony = await this.prisma.testimony.create({
                data: {
                    title: createTestimonyDto.title.trim(),
                    content: createTestimonyDto.content.trim(),
                    authorName: createTestimonyDto.authorName.trim(),
                    authorEmail: createTestimonyDto.authorEmail.trim().toLowerCase(),
                    status: ReviewStatus.PENDING,
                    categoryId: createTestimonyDto.categoryId ?? undefined,
                },
                include: this.includeCategory,
            });
            return testimony;
        }
        catch (error) {
            if (error && typeof error === 'object' && 'code' in error) {
                const code = error.code;
                if (code === 'P2002') {
                    throw new BadRequestException('A testimony with this combination already exists or the request was duplicated.');
                }
                if (code === 'P2003') {
                    throw new BadRequestException('Invalid reference in the provided data.');
                }
            }
            throw new InternalServerErrorException('Failed to create testimony. Please try again later.');
        }
    }
    buildWhereClause(query, status, resolvedCategoryId) {
        const where = {};
        if (status) {
            where.status = status;
        }
        if (resolvedCategoryId != null) {
            where.categoryId = resolvedCategoryId;
        }
        if (query.search) {
            const searchMode = { contains: query.search, mode: 'insensitive' };
            where.OR = [
                { title: searchMode },
                { content: searchMode },
                { authorName: searchMode },
                { category: { name: searchMode } },
            ];
        }
        return where;
    }
    async paginate(where, query) {
        const page = query.page && query.page > 0 ? query.page : 1;
        const limit = query.limit && query.limit > 0 ? query.limit : 10;
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.prisma.testimony.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: this.includeCategory,
            }),
            this.prisma.testimony.count({ where }),
        ]);
        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findAll(query, categoryId) {
        try {
            const where = this.buildWhereClause(query, undefined, categoryId);
            return await this.paginate(where, query);
        }
        catch {
            throw new InternalServerErrorException('Failed to fetch testimonies. Please try again later.');
        }
    }
    async findAllApproved(query, categoryId) {
        try {
            const where = this.buildWhereClause(query, ReviewStatus.APPROVED, categoryId);
            return await this.paginate(where, query);
        }
        catch {
            throw new InternalServerErrorException('Failed to fetch approved testimonies. Please try again later.');
        }
    }
    async findAllRejected(query, categoryId) {
        try {
            const where = this.buildWhereClause(query, ReviewStatus.REJECTED, categoryId);
            return await this.paginate(where, query);
        }
        catch {
            throw new InternalServerErrorException('Failed to fetch rejected testimonies. Please try again later.');
        }
    }
    async findAllPending(query, categoryId) {
        try {
            const where = this.buildWhereClause(query, ReviewStatus.PENDING, categoryId);
            return await this.paginate(where, query);
        }
        catch {
            throw new InternalServerErrorException('Failed to fetch pending testimonies. Please try again later.');
        }
    }
    async findOne(id) {
        const testimony = await this.prisma.testimony.findUnique({
            where: { id },
            include: this.includeCategory,
        });
        if (!testimony) {
            throw new NotFoundException(`Testimony with id ${id} not found.`);
        }
        return testimony;
    }
    async findOneAndIncrementViews(id, viewedTestimonies) {
        const testimony = await this.findOne(id);
        if (!viewedTestimonies.includes(id)) {
            await this.prisma.testimony.update({
                where: { id },
                data: { views: { increment: 1 } },
            });
            testimony.views += 1;
            viewedTestimonies.push(id);
        }
        return testimony;
    }
    async update(id, updateTestimonyDto, adminEmail) {
        const testimony = await this.findOne(id);
        if (updateTestimonyDto.categoryId != null) {
            const category = await this.prisma.category.findUnique({
                where: { id: updateTestimonyDto.categoryId },
            });
            if (!category) {
                throw new BadRequestException(`Category with id ${updateTestimonyDto.categoryId} not found.`);
            }
        }
        const isFeaturedUpdate = updateTestimonyDto.isFeatured;
        const featuredAtUpdate = isFeaturedUpdate === true && !testimony.isFeatured
            ? new Date()
            : isFeaturedUpdate === false
                ? null
                : undefined;
        try {
            return this.prisma.testimony.update({
                where: { id },
                data: {
                    ...(updateTestimonyDto.status && { status: updateTestimonyDto.status }),
                    ...(adminEmail && { updatedByEmail: adminEmail }),
                    ...(updateTestimonyDto.categoryId !== undefined && {
                        categoryId: updateTestimonyDto.categoryId ?? null,
                    }),
                    ...(updateTestimonyDto.isFeatured !== undefined && {
                        isFeatured: updateTestimonyDto.isFeatured,
                        ...(featuredAtUpdate !== undefined && { featuredAt: featuredAtUpdate }),
                    }),
                },
                include: this.includeCategory,
            });
        }
        catch (error) {
            if (error instanceof NotFoundException || error instanceof BadRequestException)
                throw error;
            const message = error instanceof Error ? error.message : 'Unknown error';
            throw new InternalServerErrorException(message);
        }
    }
    async incrementShares(id) {
        await this.findOne(id);
        try {
            return await this.prisma.testimony.update({
                where: { id },
                data: { shared: { increment: 1 } },
                include: this.includeCategory,
            });
        }
        catch (error) {
            throw new InternalServerErrorException('Failed to update share count.');
        }
    }
    async remove(id) {
        await this.findOne(id);
        try {
            await this.prisma.testimony.delete({ where: { id } });
        }
        catch (error) {
            if (error instanceof NotFoundException)
                throw error;
            throw new InternalServerErrorException('Failed to delete testimony. Please try again later.');
        }
    }
    async approveMany(ids) {
        try {
            await this.prisma.testimony.updateMany({
                where: { id: { in: ids } },
                data: { status: ReviewStatus.APPROVED },
            });
        }
        catch (error) {
            throw new InternalServerErrorException('Failed to approve testimonies. Please try again later.');
        }
        return { message: 'Testimonies approved successfully' };
    }
    async rejectMany(ids) {
        try {
            await this.prisma.testimony.updateMany({
                where: { id: { in: ids } },
                data: { status: ReviewStatus.REJECTED },
            });
        }
        catch (error) {
            throw new InternalServerErrorException('Failed to reject testimonies. Please try again later.');
        }
        return { message: 'Testimonies rejected successfully' };
    }
    async deleteMany(ids) {
        try {
            await this.prisma.testimony.deleteMany({
                where: { id: { in: ids } },
            });
        }
        catch (error) {
            throw new InternalServerErrorException('Failed to delete testimonies. Please try again later.');
        }
        return { message: 'Testimonies deleted successfully' };
    }
    async deleteAll() {
        try {
            await this.prisma.testimony.deleteMany();
        }
        catch (error) {
            throw new InternalServerErrorException('Failed to delete all testimonies. Please try again later.');
        }
        return { message: 'All testimonies deleted successfully' };
    }
    async featuredTestimonies() {
        try {
            return await this.prisma.testimony.findMany({
                where: { isFeatured: true },
                orderBy: { updatedAt: "desc" },
                include: this.includeCategory,
                take: 6
            });
        }
        catch (error) {
            throw new InternalServerErrorException('Failed to fetch featured testimonies. Please try again later.');
        }
    }
};
TestimoniesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], TestimoniesService);
export { TestimoniesService };
//# sourceMappingURL=testimonies.service.js.map