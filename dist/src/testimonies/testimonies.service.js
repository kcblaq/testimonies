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
    async create(createTestimonyDto) {
        try {
            const testimony = await this.prisma.testimony.create({
                data: {
                    title: createTestimonyDto.title.trim(),
                    content: createTestimonyDto.content.trim(),
                    authorName: createTestimonyDto.authorName.trim(),
                    authorEmail: createTestimonyDto.authorEmail.trim().toLowerCase(),
                    status: client_1.ReviewStatus.PENDING,
                },
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
    async findAll() {
        try {
            return this.prisma.testimony.findMany({
                orderBy: { createdAt: 'desc' },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch testimonies. Please try again later.');
        }
    }
    async findAllApproved() {
        try {
            return this.prisma.testimony.findMany({
                where: { status: client_1.ReviewStatus.APPROVED },
                orderBy: { createdAt: 'desc' },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch approved testimonies. Please try again later.');
        }
    }
    async findAllRejected() {
        try {
            return this.prisma.testimony.findMany({
                where: { status: client_1.ReviewStatus.REJECTED },
                orderBy: { createdAt: 'desc' },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch rejected testimonies. Please try again later.');
        }
    }
    async findAllPending() {
        try {
            return this.prisma.testimony.findMany({
                where: { status: client_1.ReviewStatus.PENDING },
                orderBy: { createdAt: 'desc' },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch pending testimonies. Please try again later.');
        }
    }
    async findOne(id) {
        const testimony = await this.prisma.testimony.findUnique({
            where: { id },
        });
        if (!testimony) {
            throw new common_1.NotFoundException(`Testimony with id ${id} not found.`);
        }
        return testimony;
    }
    async update(id, updateTestimonyDto, adminEmail) {
        await this.findOne(id);
        try {
            return this.prisma.testimony.update({
                where: { id },
                data: {
                    ...(updateTestimonyDto.status && { status: updateTestimonyDto.status }),
                    ...(adminEmail && { updatedByEmail: adminEmail }),
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
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
};
exports.TestimoniesService = TestimoniesService;
exports.TestimoniesService = TestimoniesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestimoniesService);
//# sourceMappingURL=testimonies.service.js.map