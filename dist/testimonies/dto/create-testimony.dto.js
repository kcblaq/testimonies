var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength, IsNotEmpty, IsInt, Min, } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateTestimonyDto {
    title;
    content;
    authorName;
    authorEmail;
    categoryId;
}
__decorate([
    ApiProperty({
        description: 'Title of the testimony',
        example: 'How this service changed my life',
        minLength: 5,
        maxLength: 200,
    }),
    IsString(),
    IsNotEmpty({ message: 'Title is required' }),
    MinLength(5, { message: 'Title must be at least 5 characters' }),
    MaxLength(200, { message: 'Title must be at most 200 characters' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "title", void 0);
__decorate([
    ApiProperty({
        description: 'Full content of the testimony',
        example: 'I am grateful for the support I received. It made a real difference.',
    }),
    IsString(),
    IsNotEmpty({ message: 'Content is required' }),
    MinLength(20, { message: 'Content must be at least 20 characters' }),
    MaxLength(5000, { message: 'Content must be at most 5000 characters' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "content", void 0);
__decorate([
    ApiProperty({
        description: 'Full name of the person giving the testimony',
        example: 'Kelechi Ugwu',
        minLength: 2,
        maxLength: 100,
    }),
    IsString(),
    IsNotEmpty({ message: 'Author name is required' }),
    MinLength(2, { message: 'Author name must be at least 2 characters' }),
    MaxLength(100, { message: 'Author name must be at most 100 characters' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "authorName", void 0);
__decorate([
    ApiProperty({
        description: 'Email of the person giving the testimony',
        example: 'kelechi@example.com',
    }),
    IsEmail({}, { message: 'Please provide a valid email address' }),
    IsNotEmpty({ message: 'Author email is required' }),
    __metadata("design:type", String)
], CreateTestimonyDto.prototype, "authorEmail", void 0);
__decorate([
    ApiProperty({
        description: 'ID of the category this testimony belongs to. Use GET /categories to list options.',
        example: 1,
    }),
    IsNotEmpty({ message: 'Category is required' }),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], CreateTestimonyDto.prototype, "categoryId", void 0);
//# sourceMappingURL=create-testimony.dto.js.map