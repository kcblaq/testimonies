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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const categories_service_1 = require("./categories.service");
const testimonies_service_1 = require("../testimonies/testimonies.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
const jwt_auth_guard_1 = require("../admin/jwt-auth.guard");
const admin_guard_1 = require("../admin/admin.guard");
const category_entity_1 = require("./entities/category.entity");
const testimony_entity_1 = require("../testimonies/entities/testimony.entity");
const testimony_query_dto_1 = require("../testimonies/dto/testimony-query.dto");
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
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all categories', description: 'Public. Returns categories with testimony count.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of categories.', type: [category_entity_1.CategoryEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':idOrSlug/testimonies'),
    (0, swagger_1.ApiOperation)({
        summary: 'List testimonies in this category',
        description: 'Returns all testimonies (any status) for the category. Use category ID or slug (e.g. healing).',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of testimonies in the category.', type: [testimony_entity_1.TestimonyEntity] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    __param(0, (0, common_1.Param)('idOrSlug')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testimony_query_dto_1.TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimonies", null);
__decorate([
    (0, common_1.Get)(':idOrSlug/testimonies/approved'),
    (0, swagger_1.ApiOperation)({
        summary: 'List approved testimonies in this category',
        description: 'Returns only approved testimonies for the category.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of approved testimonies.', type: [testimony_entity_1.TestimonyEntity] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    __param(0, (0, common_1.Param)('idOrSlug')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testimony_query_dto_1.TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimoniesApproved", null);
__decorate([
    (0, common_1.Get)(':idOrSlug/testimonies/rejected'),
    (0, swagger_1.ApiOperation)({ summary: 'List rejected testimonies in this category' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of rejected testimonies.', type: [testimony_entity_1.TestimonyEntity] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    __param(0, (0, common_1.Param)('idOrSlug')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testimony_query_dto_1.TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimoniesRejected", null);
__decorate([
    (0, common_1.Get)(':idOrSlug/testimonies/pending'),
    (0, swagger_1.ApiOperation)({ summary: 'List pending testimonies in this category' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of pending testimonies.', type: [testimony_entity_1.TestimonyEntity] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    __param(0, (0, common_1.Param)('idOrSlug')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testimony_query_dto_1.TestimonyQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategoryTestimoniesPending", null);
__decorate([
    (0, common_1.Get)(':idOrSlug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get category by ID or slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The category.', type: category_entity_1.CategoryEntity }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    __param(0, (0, common_1.Param)('idOrSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create category (admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Category created.', type: category_entity_1.CategoryEntity }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Not authenticated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Not an admin.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Name or slug already exists.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update category (admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Category updated.', type: category_entity_1.CategoryEntity }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Not authenticated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Not an admin.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Name or slug already exists.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete category (admin only). Cannot be deleted if it has existing testimonies.' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Category deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot delete category with existing testimonies.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Not authenticated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Not an admin.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "remove", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('categories'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService,
        testimonies_service_1.TestimoniesService])
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map