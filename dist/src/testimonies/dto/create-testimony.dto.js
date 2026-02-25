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
class CreateTestimonyDto {
    title;
    authorName;
    authorEmail;
    content;
    date;
    status;
    updatedByEmail;
}
exports.CreateTestimonyDto = CreateTestimonyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'title',
        description: 'The title of the testimony',
        example: 'My Testimony',
    }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Name must be at most 50 characters' }),
    (0, class_validator_1.MinLength)(10, { message: 'Name must be at least 10 characters' }),
    (0, swagger_1.ApiProperty)({
        name: 'authorName',
        description: 'The name of the person giving the testimony',
        example: 'Kelechi Ugwu',
    }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "authorName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'authorEmail',
        description: 'The email of the person giving the testimony',
        example: 'kelechi@example.com',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    (0, class_validator_1.IsString)({ message: 'Email must be a string' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "authorEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'content',
        description: 'The content of the testimony',
        example: 'This is a testimony about how great this service is.',
    }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date of the testimony',
        example: '2024-06-01',
    }),
    __metadata("design:type", Date)
], CreateTestimonyDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'status',
        description: 'Whether the testimony is approved by an admin',
        example: false,
    }),
    __metadata("design:type", Boolean)
], CreateTestimonyDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'updatedByEmail',
        description: 'The email of the person who updated the testimony',
        example: 'kelechi@example.com',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    (0, class_validator_1.IsString)({ message: 'Email must be a string' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "updatedByEmail", void 0);
//# sourceMappingURL=create-testimony.dto.js.map