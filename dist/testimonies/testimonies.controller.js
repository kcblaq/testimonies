var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query, ParseIntPipe, HttpCode, HttpStatus, Session, } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { TestimonyQueryDto } from './dto/testimony-query.dto';
import { AdminGuard } from '../admin/admin.guard';
import { JwtAuthGuard } from '../admin/jwt-auth.guard';
let TestimoniesController = class TestimoniesController {
    testimoniesService;
    constructor(testimoniesService) {
        this.testimoniesService = testimoniesService;
    }
    create(createTestimonyDto) {
        return this.testimoniesService.create(createTestimonyDto);
    }
    async findAll(query) {
        const id = query.categoryId;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, query.categorySlug);
        return this.testimoniesService.findAll(query, resolvedId);
    }
    async findAllApproved(query) {
        const id = query.categoryId;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, query.categorySlug);
        return this.testimoniesService.findAllApproved(query, resolvedId);
    }
    async findAllRejected(query) {
        const id = query.categoryId;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, query.categorySlug);
        return this.testimoniesService.findAllRejected(query, resolvedId);
    }
    async findAllPending(query) {
        const id = query.categoryId;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, query.categorySlug);
        return this.testimoniesService.findAllPending(query, resolvedId);
    }
    async getFeaturedTestimonies() {
        return await this.testimoniesService.featuredTestimonies();
    }
    findOne(id, session) {
        if (!session.viewedTestimonies) {
            session.viewedTestimonies = [];
        }
        return this.testimoniesService.findOneAndIncrementViews(id, session.viewedTestimonies);
    }
    share(id) {
        return this.testimoniesService.incrementShares(id);
    }
    update(id, updateTestimonyDto, req) {
        return this.testimoniesService.update(id, updateTestimonyDto, req.user.email);
    }
    async remove(id) {
        await this.testimoniesService.remove(id);
    }
};
__decorate([
    Post(),
    ApiOperation({
        summary: 'Submit a testimony',
        description: 'Public endpoint. Anyone can submit a testimony. It will be created with status PENDING until an admin approves it.',
    }),
    ApiResponse({ status: 201, description: 'Testimony submitted successfully.' }),
    ApiResponse({ status: 400, description: 'Validation failed or invalid request.' }),
    ApiResponse({ status: 500, description: 'Server error while creating testimony.' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTestimonyDto]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "create", null);
__decorate([
    Get(),
    ApiOperation({
        summary: 'List all testimonies',
        description: 'Filter by category using categoryId or categorySlug (slug takes precedence if both provided). Includes pagination and search filtering.',
    }),
    ApiResponse({ status: 200, description: 'List of testimonies (each includes category) with pagination metadata.' }),
    ApiResponse({ status: 404, description: 'Category not found (when using categorySlug).' }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAll", null);
__decorate([
    Get('approved'),
    ApiOperation({
        summary: 'List approved testimonies',
        description: 'Returns only approved testimonies. Filter by categoryId or categorySlug. Includes pagination and search filtering.',
    }),
    ApiResponse({ status: 200, description: 'List of approved testimonies with pagination metadata.' }),
    ApiResponse({ status: 404, description: 'Category not found (when using categorySlug).' }),
    ApiResponse({ status: 500, description: 'Server error.' }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAllApproved", null);
__decorate([
    Get('rejected'),
    ApiOperation({
        summary: 'List rejected testimonies',
        description: 'Returns only rejected testimonies. Filter by categoryId or categorySlug. Includes pagination and search filtering.',
    }),
    ApiResponse({ status: 200, description: 'List of rejected testimonies with pagination metadata.' }),
    ApiResponse({ status: 404, description: 'Category not found (when using categorySlug).' }),
    ApiResponse({ status: 500, description: 'Server error.' }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAllRejected", null);
__decorate([
    Get('pending'),
    ApiOperation({
        summary: 'List pending testimonies',
        description: 'Returns only testimonies awaiting review. Filter by categoryId or categorySlug. Includes pagination and search filtering.',
    }),
    ApiResponse({ status: 200, description: 'List of pending testimonies with pagination metadata.' }),
    ApiResponse({ status: 404, description: 'Category not found (when using categorySlug).' }),
    ApiResponse({ status: 500, description: 'Server error.' }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAllPending", null);
__decorate([
    Get('featured'),
    HttpCode(HttpStatus.OK),
    ApiOperation({
        summary: 'List featured testimonies',
        description: 'Returns testimonies marked as featured.',
    }),
    ApiResponse({ status: 200, description: 'List of featured testimonies.' }),
    ApiResponse({ status: 500, description: 'Server error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "getFeaturedTestimonies", null);
__decorate([
    Get(':id'),
    ApiOperation({ summary: 'Get a testimony by ID' }),
    ApiResponse({ status: 200, description: 'The testimony.' }),
    ApiResponse({ status: 404, description: 'Testimony not found.' }),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "findOne", null);
__decorate([
    Post(':id/share'),
    HttpCode(HttpStatus.OK),
    ApiOperation({ summary: 'Increment share count for a testimony' }),
    ApiResponse({ status: 200, description: 'Share count incremented.' }),
    ApiResponse({ status: 404, description: 'Testimony not found.' }),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "share", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Patch(':id'),
    ApiBearerAuth(),
    ApiOperation({
        summary: 'Approve or reject a testimony (admin only)',
        description: 'Requires admin authentication. Set status to APPROVED or REJECTED.',
    }),
    ApiResponse({ status: 200, description: 'Testimony updated.' }),
    ApiResponse({ status: 403, description: 'Forbidden. Not an admin.' }),
    ApiResponse({ status: 404, description: 'Testimony not found.' }),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __param(2, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateTestimonyDto, Object]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "update", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiBearerAuth(),
    ApiOperation({ summary: 'Delete a testimony (admin only)' }),
    ApiResponse({ status: 204, description: 'Testimony deleted.' }),
    ApiResponse({ status: 403, description: 'Forbidden. Not an admin.' }),
    ApiResponse({ status: 404, description: 'Testimony not found.' }),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "remove", null);
TestimoniesController = __decorate([
    ApiTags('testimonies'),
    Controller('testimonies'),
    __metadata("design:paramtypes", [TestimoniesService])
], TestimoniesController);
export { TestimoniesController };
//# sourceMappingURL=testimonies.controller.js.map