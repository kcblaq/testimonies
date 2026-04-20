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
exports.TestimonyEntity = exports.ReviewStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["PENDING"] = "PENDING";
    ReviewStatus["APPROVED"] = "APPROVED";
    ReviewStatus["REJECTED"] = "REJECTED";
})(ReviewStatus || (exports.ReviewStatus = ReviewStatus = {}));
class TestimonyEntity {
    id;
    title;
    content;
    status;
    createdAt;
    updatedAt;
    authorEmail;
    authorName;
    updatedByEmail;
    categoryId;
}
exports.TestimonyEntity = TestimonyEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique testimony ID' }),
    __metadata("design:type", Number)
], TestimonyEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My Healing Story', description: 'Title of the testimony' }),
    __metadata("design:type", String)
], TestimonyEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'I was healed...', description: 'Content of the testimony' }),
    __metadata("design:type", String)
], TestimonyEntity.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ReviewStatus, example: ReviewStatus.PENDING, description: 'Current status' }),
    __metadata("design:type", String)
], TestimonyEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-15T10:00:00Z', description: 'Creation date' }),
    __metadata("design:type", Date)
], TestimonyEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-15T10:00:00Z', description: 'Last update date' }),
    __metadata("design:type", Date)
], TestimonyEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test@example.com', description: 'Author email' }),
    __metadata("design:type", String)
], TestimonyEntity.prototype, "authorEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Author name' }),
    __metadata("design:type", String)
], TestimonyEntity.prototype, "authorName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'admin@example.com', description: 'Admin who updated it last' }),
    __metadata("design:type", String)
], TestimonyEntity.prototype, "updatedByEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Associated Category ID' }),
    __metadata("design:type", Number)
], TestimonyEntity.prototype, "categoryId", void 0);
//# sourceMappingURL=testimony.entity.js.map