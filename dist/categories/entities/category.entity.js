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
exports.CategoryEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class CategoryCount {
    testimonies;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Number of testimonies in this category' }),
    __metadata("design:type", Number)
], CategoryCount.prototype, "testimonies", void 0);
class CategoryEntity {
    id;
    name;
    slug;
    description;
    createdAt;
    updatedAt;
    _count;
}
exports.CategoryEntity = CategoryEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique category ID' }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Healing', description: 'Name of the category' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'healing', description: 'URL-friendly slug' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Testimonies related to healing', description: 'Optional category description' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-15T10:00:00Z', description: 'Creation date' }),
    __metadata("design:type", Date)
], CategoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-15T10:00:00Z', description: 'Last update date' }),
    __metadata("design:type", Date)
], CategoryEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Counts of related records', type: CategoryCount }),
    __metadata("design:type", CategoryCount)
], CategoryEntity.prototype, "_count", void 0);
//# sourceMappingURL=category.entity.js.map