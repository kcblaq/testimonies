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
exports.CreateTestimonyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateTestimonyDto {
    title;
    content;
    authorName;
    authorEmail;
    categoryId;
}
exports.CreateTestimonyDto = CreateTestimonyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the testimony',
        example: 'How this service changed my life',
        minLength: 5,
        maxLength: 200,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    (0, class_validator_1.MinLength)(5, { message: 'Title must be at least 5 characters' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Title must be at most 200 characters' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full content of the testimony',
        example: 'I am grateful for the support I received. It made a real difference.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Content is required' }),
    (0, class_validator_1.MinLength)(20, { message: 'Content must be at least 20 characters' }),
    (0, class_validator_1.MaxLength)(5000, { message: 'Content must be at most 5000 characters' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name of the person giving the testimony',
        example: 'Kelechi Ugwu',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Author name is required' }),
    (0, class_validator_1.MinLength)(2, { message: 'Author name must be at least 2 characters' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Author name must be at most 100 characters' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "authorName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email of the person giving the testimony',
        example: 'kelechi@example.com',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Author email is required' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "authorEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the category this testimony belongs to. Use GET /categories to list options.',
        example: 1,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Category is required' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateTestimonyDto.prototype, "categoryId", void 0);
//# sourceMappingURL=create-testimony.dto.js.map