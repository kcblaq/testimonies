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
exports.TestimoniesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
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
                throw new common_1.NotFoundException(`Category with slug "${categorySlug}" not found.`);
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
                throw new common_1.BadRequestException(`Category with id ${createTestimonyDto.categoryId} not found.`);
            }
        }
        try {
            const testimony = await this.prisma.testimony.create({
                data: {
                    title: createTestimonyDto.title.trim(),
                    content: createTestimonyDto.content.trim(),
                    authorName: createTestimonyDto.authorName.trim(),
                    authorEmail: createTestimonyDto.authorEmail.trim().toLowerCase(),
                    status: client_1.ReviewStatus.PENDING,
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
                    throw new common_1.BadRequestException('A testimony with this combination already exists or the request was duplicated.');
                }
                if (code === 'P2003') {
                    throw new common_1.BadRequestException('Invalid reference in the provided data.');
                }
            }
            throw new common_1.InternalServerErrorException('Failed to create testimony. Please try again later.');
        }
    }
    async findAll(categoryId) {
        try {
            return this.prisma.testimony.findMany({
                where: categoryId != null ? { categoryId } : undefined,
                orderBy: { createdAt: 'desc' },
                include: this.includeCategory,
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch testimonies. Please try again later.');
        }
    }
    async findAllApproved(categoryId) {
        try {
            return this.prisma.testimony.findMany({
                where: {
                    status: client_1.ReviewStatus.APPROVED,
                    ...(categoryId != null && { categoryId }),
                },
                orderBy: { createdAt: 'desc' },
                include: this.includeCategory,
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch approved testimonies. Please try again later.');
        }
    }
    async findAllRejected(categoryId) {
        try {
            return this.prisma.testimony.findMany({
                where: {
                    status: client_1.ReviewStatus.REJECTED,
                    ...(categoryId != null && { categoryId }),
                },
                orderBy: { createdAt: 'desc' },
                include: this.includeCategory,
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch rejected testimonies. Please try again later.');
        }
    }
    async findAllPending(categoryId) {
        try {
            return this.prisma.testimony.findMany({
                where: {
                    status: client_1.ReviewStatus.PENDING,
                    ...(categoryId != null && { categoryId }),
                },
                orderBy: { createdAt: 'desc' },
                include: this.includeCategory,
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch pending testimonies. Please try again later.');
        }
    }
    async findOne(id) {
        const testimony = await this.prisma.testimony.findUnique({
            where: { id },
            include: this.includeCategory,
        });
        if (!testimony) {
            throw new common_1.NotFoundException(`Testimony with id ${id} not found.`);
        }
        return testimony;
    }
    async update(id, updateTestimonyDto, adminEmail) {
        await this.findOne(id);
        if (updateTestimonyDto.categoryId != null) {
            const category = await this.prisma.category.findUnique({
                where: { id: updateTestimonyDto.categoryId },
            });
            if (!category) {
                throw new common_1.BadRequestException(`Category with id ${updateTestimonyDto.categoryId} not found.`);
            }
        }
        try {
            return this.prisma.testimony.update({
                where: { id },
                data: {
                    ...(updateTestimonyDto.status && { status: updateTestimonyDto.status }),
                    ...(adminEmail && { updatedByEmail: adminEmail }),
                    ...(updateTestimonyDto.categoryId !== undefined && {
                        categoryId: updateTestimonyDto.categoryId ?? null,
                    }),
                },
                include: this.includeCategory,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to update testimony. Please try again later.');
        }
    }
    async remove(id) {
        await this.findOne(id);
        try {
            await this.prisma.testimony.delete({ where: { id } });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to delete testimony. Please try again later.');
        }
    }
    async approveMany(ids) {
        try {
            await this.prisma.testimony.updateMany({
                where: { id: { in: ids } },
                data: { status: client_1.ReviewStatus.APPROVED },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to approve testimonies. Please try again later.');
        }
        return { message: 'Testimonies approved successfully' };
    }
    async rejectMany(ids) {
        try {
            await this.prisma.testimony.updateMany({
                where: { id: { in: ids } },
                data: { status: client_1.ReviewStatus.REJECTED },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to reject testimonies. Please try again later.');
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
            throw new common_1.InternalServerErrorException('Failed to delete testimonies. Please try again later.');
        }
        return { message: 'Testimonies deleted successfully' };
    }
    async deleteAll() {
        try {
            await this.prisma.testimony.deleteMany();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to delete all testimonies. Please try again later.');
        }
        return { message: 'All testimonies deleted successfully' };
    }
};
exports.TestimoniesService = TestimoniesService;
exports.TestimoniesService = TestimoniesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestimoniesService);
//# sourceMappingURL=testimonies.service.js.map