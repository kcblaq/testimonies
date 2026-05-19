var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsInt, Min, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
export class UpdateTestimonyDto {
    status;
    categoryId;
    isFeatured;
}
__decorate([
    ApiPropertyOptional({
        description: 'Review status: APPROVED or REJECTED',
        enum: ['APPROVED', 'REJECTED'],
        example: 'APPROVED',
    }),
    IsOptional(),
    IsIn(['APPROVED', 'REJECTED'], {
        message: 'Status must be either APPROVED or REJECTED',
    }),
    __metadata("design:type", String)
], UpdateTestimonyDto.prototype, "status", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Category ID. Omit to leave unchanged.',
        example: 1,
    }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], UpdateTestimonyDto.prototype, "categoryId", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Whether the testimony is featured (admin only)',
        example: true,
    }),
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateTestimonyDto.prototype, "isFeatured", void 0);
//# sourceMappingURL=update-testimony.dto.js.map