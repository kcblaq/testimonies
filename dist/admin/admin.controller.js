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
import { Body, Controller, Post, UseGuards, HttpCode, HttpStatus, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminGuard } from './admin.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AdminLoginDto } from './dto/admin-login.dto';
import { AdminRegisterDto } from './dto/admin-register.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
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
    async deleteAllAdmins() {
        return this.adminService.deleteAllAdmins();
    }
    async resendVerificationToken(email) {
        return this.adminService.resendVerificationToken(email);
    }
    async dashboardStats() {
        return this.adminService.dashboarddata();
    }
};
__decorate([
    Post('login'),
    HttpCode(HttpStatus.OK),
    ApiOperation({
        summary: 'Admin login',
        description: 'Authenticate with email and password. Email must be verified first. Returns a JWT for protected admin routes.',
    }),
    ApiResponse({ status: 200, description: 'Login successful. Returns access_token.' }),
    ApiResponse({ status: 401, description: 'Invalid credentials or email not verified.' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminLoginDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    Post('verify-email'),
    HttpCode(HttpStatus.OK),
    ApiOperation({
        summary: 'Verify admin email',
        description: 'Call this with the verification token received after registration or when added by another admin. Required before the new admin can log in.',
    }),
    ApiResponse({ status: 200, description: 'Email verified. Admin can now log in.' }),
    ApiResponse({ status: 400, description: 'Token missing.' }),
    ApiResponse({ status: 401, description: 'Invalid or expired token.' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "verifyEmail", null);
__decorate([
    Post('register'),
    HttpCode(HttpStatus.CREATED),
    ApiOperation({
        summary: 'Register first admin',
        description: 'Only works when no admins exist. Creates an admin who must verify their email (using the returned token) before logging in.',
    }),
    ApiResponse({ status: 201, description: 'First admin created. Verify email before login.' }),
    ApiResponse({ status: 400, description: 'Admins already exist or invalid input.' }),
    ApiResponse({ status: 409, description: 'Email already registered.' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminRegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "register", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Post('add'),
    ApiBearerAuth(),
    ApiOperation({
        summary: 'Add admin (admin only)',
        description: 'Create a new admin with name, email, and password. The new admin must verify their email (using the returned token) before they can log in.',
    }),
    ApiResponse({ status: 201, description: 'Admin added. Share verification token with them.' }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    ApiResponse({ status: 409, description: 'Email already an admin.' }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AdminRegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "addAdmin", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Post('remove'),
    ApiBearerAuth(),
    ApiOperation({ summary: 'Remove admin (admin only)' }),
    ApiResponse({ status: 200, description: 'Admin removed.' }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    __param(0, Body('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "removeAdmin", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Post('list'),
    ApiBearerAuth(),
    ApiOperation({ summary: 'List admins (admin only)' }),
    ApiResponse({
        status: 200,
        description: 'List of admins with email, name, and emailVerified status.',
    }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listAdmins", null);
__decorate([
    UseGuards(JwtAuthGuard, AdminGuard),
    Post('delete-all'),
    ApiBearerAuth(),
    ApiOperation({ summary: 'Delete all admins (admin only)' }),
    ApiResponse({ status: 200, description: 'All admins deleted.' }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteAllAdmins", null);
__decorate([
    Post('resend-verification-token'),
    HttpCode(HttpStatus.OK),
    ApiOperation({
        summary: 'Resend verification token',
        description: 'Resend verification token to an admin who has not verified their email. The admin must have been added by another admin or registered previously.',
    }),
    ApiResponse({ status: 200, description: 'Verification token resent successfully.' }),
    ApiResponse({ status: 400, description: 'Email is required.' }),
    ApiResponse({ status: 404, description: 'Admin not found.' }),
    __param(0, Body('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "resendVerificationToken", null);
__decorate([
    Post('dashboard-stats'),
    HttpCode(HttpStatus.OK),
    ApiOperation({
        summary: 'Get dashboard statistics',
        description: 'Returns statistics for dashboard including total testimonies, approved testimonies, rejected testimonies, pending testimonies, total categories, total admins, submissions this week, submissions today, submissions by category, total views, and total shares.',
    }),
    ApiResponse({ status: 200, description: 'Dashboard statistics retrieved successfully.' }),
    ApiResponse({ status: 401, description: 'Not authenticated.' }),
    ApiResponse({ status: 403, description: 'Not an admin.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "dashboardStats", null);
AdminController = __decorate([
    ApiTags('admin'),
    Controller('admin'),
    __metadata("design:paramtypes", [AdminService,
        JwtService])
], AdminController);
export { AdminController };
//# sourceMappingURL=admin.controller.js.map