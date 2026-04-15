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
exports.TestimoniesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const testimonies_service_1 = require("./testimonies.service");
const create_testimony_dto_1 = require("./dto/create-testimony.dto");
const update_testimony_dto_1 = require("./dto/update-testimony.dto");
const admin_guard_1 = require("../admin/admin.guard");
const jwt_auth_guard_1 = require("../admin/jwt-auth.guard");
let TestimoniesController = class TestimoniesController {
    testimoniesService;
    constructor(testimoniesService) {
        this.testimoniesService = testimoniesService;
    }
    create(createTestimonyDto) {
        return this.testimoniesService.create(createTestimonyDto);
    }
    async findAll(categoryId, categorySlug) {
        const id = categoryId ? parseInt(categoryId, 10) : undefined;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, categorySlug);
        return this.testimoniesService.findAll(resolvedId);
    }
    async findAllApproved(categoryId, categorySlug) {
        const id = categoryId ? parseInt(categoryId, 10) : undefined;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, categorySlug);
        return this.testimoniesService.findAllApproved(resolvedId);
    }
    async findAllRejected(categoryId, categorySlug) {
        const id = categoryId ? parseInt(categoryId, 10) : undefined;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, categorySlug);
        return this.testimoniesService.findAllRejected(resolvedId);
    }
    async findAllPending(categoryId, categorySlug) {
        const id = categoryId ? parseInt(categoryId, 10) : undefined;
        const resolvedId = await this.testimoniesService.resolveCategoryId(Number.isNaN(id) ? undefined : id, categorySlug);
        return this.testimoniesService.findAllPending(resolvedId);
    }
    findOne(id) {
        return this.testimoniesService.findOne(id);
    }
    update(id, updateTestimonyDto, req) {
        return this.testimoniesService.update(id, updateTestimonyDto, req.user.email);
    }
    async remove(id) {
        await this.testimoniesService.remove(id);
    }
};
exports.TestimoniesController = TestimoniesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Submit a testimony',
        description: 'Public endpoint. Anyone can submit a testimony. It will be created with status PENDING until an admin approves it.',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Testimony submitted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation failed or invalid request.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server error while creating testimony.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_testimony_dto_1.CreateTestimonyDto]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'List all testimonies',
        description: 'Filter by category using categoryId or categorySlug (slug takes precedence if both provided).',
    }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, type: Number, description: 'Filter by category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: false, type: String, description: 'Filter by category slug (e.g. healing)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of testimonies (each includes category).' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found (when using categorySlug).' }),
    __param(0, (0, common_1.Query)('categoryId')),
    __param(1, (0, common_1.Query)('categorySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('approved'),
    (0, swagger_1.ApiOperation)({
        summary: 'List approved testimonies',
        description: 'Returns only approved testimonies. Filter by categoryId or categorySlug.',
    }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, type: Number, description: 'Filter by category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: false, type: String, description: 'Filter by category slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of approved testimonies.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found (when using categorySlug).' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server error.' }),
    __param(0, (0, common_1.Query)('categoryId')),
    __param(1, (0, common_1.Query)('categorySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAllApproved", null);
__decorate([
    (0, common_1.Get)('rejected'),
    (0, swagger_1.ApiOperation)({
        summary: 'List rejected testimonies',
        description: 'Returns only rejected testimonies. Filter by categoryId or categorySlug.',
    }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, type: Number, description: 'Filter by category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: false, type: String, description: 'Filter by category slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of rejected testimonies.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found (when using categorySlug).' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server error.' }),
    __param(0, (0, common_1.Query)('categoryId')),
    __param(1, (0, common_1.Query)('categorySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAllRejected", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, swagger_1.ApiOperation)({
        summary: 'List pending testimonies',
        description: 'Returns only testimonies awaiting review. Filter by categoryId or categorySlug.',
    }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, type: Number, description: 'Filter by category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'categorySlug', required: false, type: String, description: 'Filter by category slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of pending testimonies.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found (when using categorySlug).' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server error.' }),
    __param(0, (0, common_1.Query)('categoryId')),
    __param(1, (0, common_1.Query)('categorySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "findAllPending", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a testimony by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The testimony.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimony not found.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Approve or reject a testimony (admin only)',
        description: 'Requires admin authentication. Set status to APPROVED or REJECTED.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Testimony updated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Not an admin.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimony not found.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_testimony_dto_1.UpdateTestimonyDto, Object]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a testimony (admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Testimony deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Not an admin.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Testimony not found.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestimoniesController.prototype, "remove", null);
exports.TestimoniesController = TestimoniesController = __decorate([
    (0, swagger_1.ApiTags)('testimonies'),
    (0, common_1.Controller)('testimonies'),
    __metadata("design:paramtypes", [testimonies_service_1.TestimoniesService])
], TestimoniesController);
//# sourceMappingURL=testimonies.controller.js.map