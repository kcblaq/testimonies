import {
  Body,
  Controller,
  Post,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminGuard } from './admin.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AdminLoginDto } from './dto/admin-login.dto';
import { AdminRegisterDto } from './dto/admin-register.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Admin login',
    description:
      'Authenticate with email and password. Email must be verified first. Returns a JWT for protected admin routes.',
  })
  @ApiResponse({ status: 200, description: 'Login successful. Returns access_token.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials or email not verified.' })
  async login(@Body() dto: AdminLoginDto): Promise<{ access_token: string }> {
    const admin = await this.adminService.validateAdmin(dto.email, dto.password);
    const access_token = this.jwtService.sign({
      email: admin.email,
      sub: admin.email,
    });
    return { access_token };
  }

  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Verify admin email',
    description:
      'Call this with the verification token received after registration or when added by another admin. Required before the new admin can log in.',
  })
  @ApiResponse({ status: 200, description: 'Email verified. Admin can now log in.' })
  @ApiResponse({ status: 400, description: 'Token missing.' })
  @ApiResponse({ status: 401, description: 'Invalid or expired token.' })
  async verifyEmail(@Body() dto: VerifyEmailDto) {
    return this.adminService.verifyEmail(dto.token);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Register first admin',
    description:
      'Only works when no admins exist. Creates an admin who must verify their email (using the returned token) before logging in.',
  })
  @ApiResponse({ status: 201, description: 'First admin created. Verify email before login.' })
  @ApiResponse({ status: 400, description: 'Admins already exist or invalid input.' })
  @ApiResponse({ status: 409, description: 'Email already registered.' })
  async register(@Body() dto: AdminRegisterDto) {
    return this.adminService.register(dto.name, dto.email, dto.password);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('add')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Add admin (admin only)',
    description:
      'Create a new admin with name, email, and password. The new admin must verify their email (using the returned token) before they can log in.',
  })
  @ApiResponse({ status: 201, description: 'Admin added. Share verification token with them.' })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiResponse({ status: 403, description: 'Not an admin.' })
  @ApiResponse({ status: 409, description: 'Email already an admin.' })
  async addAdmin(@Body() dto: AdminRegisterDto) {
    return this.adminService.addAdmin(dto.name, dto.email, dto.password);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('remove')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remove admin (admin only)' })
  @ApiResponse({ status: 200, description: 'Admin removed.' })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiResponse({ status: 403, description: 'Not an admin.' })
  async removeAdmin(@Body('email') email: string) {
    const removed = await this.adminService.removeAdmin(email);
    if (removed) {
      return { message: `Admin with email ${email} removed successfully.` };
    }
    return { message: `Admin with email ${email} not found.` };
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('list')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List admins (admin only)' })
  @ApiResponse({
    status: 200,
    description: 'List of admins with email, name, and emailVerified status.',
  })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiResponse({ status: 403, description: 'Not an admin.' })
  async listAdmins() {
    return this.adminService.getAllAdmins();
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('delete-all')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete all admins (admin only)' })
  @ApiResponse({ status: 200, description: 'All admins deleted.' })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiResponse({ status: 403, description: 'Not an admin.' })
  async deleteAllAdmins() {
    return this.adminService.deleteAllAdmins();
  }

  @Post('resend-verification-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Resend verification token',
    description:
      'Resend verification token to an admin who has not verified their email. The admin must have been added by another admin or registered previously.',
  })
  @ApiResponse({ status: 200, description: 'Verification token resent successfully.' })
  @ApiResponse({ status: 400, description: 'Email is required.' })
  @ApiResponse({ status: 404, description: 'Admin not found.' })
  async resendVerificationToken(@Body('email') email: string) {
    return this.adminService.resendVerificationToken(email);
  }
}
