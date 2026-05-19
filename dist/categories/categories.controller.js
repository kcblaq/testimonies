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
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, HttpCode, HttpStatus, Query, } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { TestimoniesService } from '../testimonies/testimonies.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from '../admin/jwt-auth.guard';
import { AdminGuard } from '../admin/admin.guard';
import { CategoryEntity } from './entities/category.entity';
import { TestimonyEntity } from '../testimonies/entities/testimony.entity';
import { TestimonyQueryDto } from '../testimonies/dto/testimony-query.dto';
let CategoriesController = class CategoriesController {
    categoriesService;
    testimoniesService;
    constructor(categoriesService, testimoniesService) {
        this.categoriesService = categoriesService;
        this.testimoniesService = testimoniesService;
    }
    findAll() {
        return this.categoriesService.findAll();
    }
    async getCategoryTestimonies(idOrSlug, query) {
        const categoryId = await this.resolveCategoryId(idOrSlug);
        return this.testimoniesService.findAll(query, categoryId);
    }
    async getCategoryTestimoniesApproved(idOrSlug, query) {
        const categoryId = await this.resolveCategoryId(idOrSlug);
        return this.testimoniesService.findAllApproved(query, categoryId);
    }
    async getCategoryTestimoniesRejected(idOrSlug, query) {
        const categoryId = await this.resolveCategoryId(idOrSlug);
        return this.testimoniesService.findAllRejected(query, categoryId);
    }
    async getCategoryTestimoniesPending(idOrSlug, query) {
        const categoryId = await this.resolveCategoryId(idOrSlug);
        return this.testimoniesService.findAllPending(query, categoryId);
    }
    findOne(idOrSlug) {
        const num = parseInt(idOrSlug, 10);
        if (!Number.isNaN(num)) {
            return this.categoriesService.findOne(num);
        }
        return this.categoriesService.findBySlug(idOrSlug);
    }
    async resolveCategoryId(idOrSlug) {
        const num = parseInt(idOrSlug, 10);
        if (!Number.isNaN(num)) {
            const category = await this.categoriesService.findOne(num);
            return category.id;
        }
        const category = await this.categoriesService.findBySlug(idOrSlug);
        return category.id;
    }
    create(dto) {
        return this.categoriesService.create(dto);
    }
    update(id, dto) {
        return this.categoriesService.update(id, dto);
    }
    async remove(id) {
        await this.categoriesService.remove(id);
    }
};
__decorate([
    Get(),
    ApiOperation({ summary: 'List all categories', description: 'Public. Returns categories with testimony count.' }),
    ApiResponse({ status: 200, description: 'List of categories.', type: [CategoryEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findAll", null);
__decorate([
    Get(':idOrSlug/testimonies'),
    ApiOperation({
        summary: 'List testimonies in this category',
        description: 'Returns all testimonies (any status) for the category. Use category ID or slug (e.g. healing).',
    }),
    ApiResponse({ status: 200, description: 'List of testimonies in the category.', type: [TestimonyEntity] }),
    ApiResponse({ status: 404, description: 'Category not found.' }),
    __param(0, Param('idOrSlug')),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimonies", null);
__decorate([
    Get(':idOrSlug/testimonies/approved'),
    ApiOperation({
        summary: 'List approved testimonies in this category',
        description: 'Returns only approved testimonies for the category.',
    }),
    ApiResponse({ status: 200, description: 'List of approved testimonies.', type: [TestimonyEntity] }),
    ApiResponse({ status: 404, description: 'Category not found.' }),
    __param(0, Param('idOrSlug')),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimoniesApproved", null);
__decorate([
    Get(':idOrSlug/testimonies/rejected'),
    ApiOperation({ summary: 'List rejected testimonies in this category' }),
    ApiResponse({ status: 200, description: 'List of rejected testimonies.', type: [TestimonyEntity] }),
    ApiResponse({ status: 404, description: 'Category not found.' }),
    __param(0, Param('idOrSlug')),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimoniesRejected", null);
__decorate([
    Get(':idOrSlug/testimonies/pending'),
    ApiOperation({ summary: 'List pending testimonies in this category' }),
    ApiResponse({ status: 200, description: 'List of pending testimonies.', type: [TestimonyEntity] }),
    ApiResponse({ status: 404, description: 'Category not found.' }),
    __param(0, Param('idOrSlug')),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimoniesPending", null);
__decorate([
    Get(':idOrSlug'),
    ApiOperation({ summary: 'Get category by ID or slug' }),
    ApiResponse({ status: 200, description: 'The category.', type: CategoryEntity }),
    ApiResponse({ status: 404, description: 'Category not found.' }),
    __param(0, Param('idOrSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findOne", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Post(),
    ApiBearerAuth(),
    ApiOperation({ summary: 'Create category (admin only)' }),
    ApiResponse({ status: 201, description: 'Category created.', type: CategoryEntity }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    ApiResponse({ status: 409, description: 'Name or slug already exists.' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "create", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Patch(':id'),
    ApiBearerAuth(),
    ApiOperation({ summary: 'Update category (admin only)' }),
    ApiResponse({ status: 200, description: 'Category updated.', type: CategoryEntity }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    ApiResponse({ status: 404, description: 'Category not found.' }),
    ApiResponse({ status: 409, description: 'Name or slug already exists.' }),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "update", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiBearerAuth(),
    ApiOperation({ summary: 'Delete category (admin only). Cannot be deleted if it has existing testimonies.' }),
    ApiResponse({ status: 204, description: 'Category deleted.' }),
    ApiResponse({ status: 400, description: 'Cannot delete category with existing testimonies.' }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    ApiResponse({ status: 404, description: 'Category not found.' }),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "remove", null);
CategoriesController = __decorate([
    ApiTags('categories'),
    Controller('categories'),
    __metadata("design:paramtypes", [CategoriesService,
        TestimoniesService])
], CategoriesController);
export { CategoriesController };
//# sourceMappingURL=categories.controller.js.map