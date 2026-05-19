var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateCategoryDto {
    name;
    slug;
    description;
}
__decorate([
    ApiProperty({ example: 'Healing', description: 'Category display name' }),
    IsString(),
    IsNotEmpty({ message: 'Name is required' }),
    MinLength(2, { message: 'Name must be at least 2 characters' }),
    MaxLength(50, { message: 'Name must be at most 50 characters' }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
__decorate([
    ApiPropertyOptional({
        example: 'healing',
        description: 'URL-friendly slug. Defaults to lowercased name if not provided.',
    }),
    IsOptional(),
    IsString(),
    MinLength(2),
    MaxLength(50),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "slug", void 0);
__decorate([
    ApiPropertyOptional({ description: 'Optional category description' }),
    IsOptional(),
    IsString(),
    MaxLength(200),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "description", void 0);
//# sourceMappingURL=create-category.dto.js.map