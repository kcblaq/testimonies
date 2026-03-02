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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const swagger_1 = require("@nestjs/swagger");
const admin_service_1 = require("./admin.service");
const admin_guard_1 = require("./admin.guard");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const admin_login_dto_1 = require("./dto/admin-login.dto");
const admin_register_dto_1 = require("./dto/admin-register.dto");
const verify_email_dto_1 = require("./dto/verify-email.dto");
let AdminController = class AdminController {
    adminService;
    jwtService;
    constructor(adminService, jwtService) {
        this.adminService = adminService;
        this.jwtService = jwtService;
    }
    async login(dto) {
        const admin = await this.adminService.validateAdmin(dto.email, dto.password);
        const access_token = this.jwtService.sign({
            email: admin.email,
            sub: admin.email,
        });
        return { access_token };
    }
    async verifyEmail(dto) {
        return this.adminService.verifyEmail(dto.token);
    }
    async register(dto) {
        return this.adminService.register(dto.name, dto.email, dto.password);
    }
    async addAdmin(dto) {
        return this.adminService.addAdmin(dto.name, dto.email, dto.password);
    }
    async removeAdmin(email) {
        const removed = await this.adminService.removeAdmin(email);
        if (removed) {
            return { message: `Admin with email ${email} removed successfully.` };
        }
        return { message: `Admin with email ${email} not found.` };
    }
    async listAdmins() {
        return this.adminService.getAllAdmins();
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Admin login',
        description: 'Authenticate with email and password. Email must be verified first. Returns a JWT for protected admin routes.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login successful. Returns access_token.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials or email not verified.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_login_dto_1.AdminLoginDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('verify-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Verify admin email',
        description: 'Call this with the verification token received after registration or when added by another admin. Required before the new admin can log in.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Email verified. Admin can now log in.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Token missing.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid or expired token.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Register first admin',
        description: 'Only works when no admins exist. Creates an admin who must verify their email (using the returned token) before logging in.',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'First admin created. Verify email before login.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Admins already exist or invalid input.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email already registered.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_register_dto_1.AdminRegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Add admin (admin only)',
        description: 'Create a new admin with name, email, and password. The new admin must verify their email (using the returned token) before they can log in.',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Admin added. Share verification token with them.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Not authenticated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Not an admin.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email already an admin.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_register_dto_1.AdminRegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "addAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Post)('remove'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Remove admin (admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Admin removed.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Not authenticated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Not an admin.' }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "removeAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Post)('list'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'List admins (admin only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of admins with email, name, and emailVerified status.',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Not authenticated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Not an admin.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listAdmins", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('admin'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        jwt_1.JwtService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map