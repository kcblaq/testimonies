var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsString, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
export class TestimonyQueryDto {
    categoryId;
    categorySlug;
    search;
    page = 1;
    limit = 10;
}
__decorate([
    ApiPropertyOptional({ description: 'Filter by category ID', type: Number }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    __metadata("design:type", Number)
], TestimonyQueryDto.prototype, "categoryId", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Filter by category slug', type: String }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], TestimonyQueryDto.prototype, "categorySlug", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Search term for title, content, authorName, or category name', type: String }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], TestimonyQueryDto.prototype, "search", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Page number', default: 1, type: Number }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], TestimonyQueryDto.prototype, "page", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Number of items per page', default: 10, type: Number }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], TestimonyQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=testimony-query.dto.js.map