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
import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
export class AdminRegisterDto {
    name;
    email;
    password;
}
__decorate([
    ApiProperty({ example: 'Jane Admin', description: 'Full name of the admin' }),
    IsString(),
    IsNotEmpty({ message: 'Name is required' }),
    MinLength(2, { message: 'Name must be at least 2 characters' }),
    MaxLength(100, { message: 'Name must be at most 100 characters' }),
    __metadata("design:type", String)
], AdminRegisterDto.prototype, "name", void 0);
__decorate([
    ApiProperty({ example: 'admin@example.com', description: 'Admin email' }),
    IsEmail({}, { message: 'Please provide a valid email' }),
    IsNotEmpty(),
    __metadata("design:type", String)
], AdminRegisterDto.prototype, "email", void 0);
__decorate([
    ApiProperty({ example: 'your-secure-password', description: 'Admin password', minLength: 6 }),
    IsString(),
    IsNotEmpty({ message: 'Password is required' }),
    MinLength(6, { message: 'Password must be at least 6 characters' }),
    __metadata("design:type", String)
], AdminRegisterDto.prototype, "password", void 0);
//# sourceMappingURL=admin-register.dto.js.map