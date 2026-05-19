var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, ConflictException, BadRequestException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';
import { EmailService } from '../email/email.service';
import { ReviewStatus } from 'src/generated/prisma/enums';
const VERIFICATION_TOKEN_BYTES = 32;
const VERIFICATION_EXPIRY_HOURS = 24;
let AdminService = class AdminService {
    prisma;
    emailService;
    constructor(prisma, emailService) {
        this.prisma = prisma;
        this.emailService = emailService;
    }
    SALT_ROUNDS = 10;
    async isAdmin(email) {
        if (!email)
            return false;
        const admin = await this.prisma.admin.findUnique({
            where: { email: email.trim().toLowerCase() },
        });
        return !!admin;
    }
    async validateAdmin(email, password) {
        const normalizedEmail = email.trim().toLowerCase();
        const admin = await this.prisma.admin.findUnique({
            where: { email: normalizedEmail },
        });
        if (!admin) {
            throw new UnauthorizedException('Invalid email or password.');
        }
        if (!admin.emailVerified) {
            throw new UnauthorizedException('Please verify your email before logging in. Check your inbox for the verification link.');
        }
        const valid = await bcrypt.compare(password, admin.password);
        if (!valid) {
            throw new UnauthorizedException('Invalid email or password.');
        }
        return { email: admin.email, name: admin.name };
    }
    generateVerificationToken(email, name) {
        const token = randomBytes(VERIFICATION_TOKEN_BYTES).toString('hex');
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + VERIFICATION_EXPIRY_HOURS);
        this.emailService.sendMail(email, 'dff86133-65ec-4d5c-b8fc-ba2d669382f5', { token, name, expiresAt });
        return { token, expiresAt };
    }
    async register(name, email, password) {
        const count = await this.prisma.admin.count();
        if (count > 0) {
            throw new BadRequestException('Registration is only allowed when no admins exist. Use an existing admin to add more.');
        }
        const normalizedEmail = email.trim().toLowerCase();
        const existing = await this.prisma.admin.findUnique({
            where: { email: normalizedEmail },
        });
        if (existing) {
            throw new ConflictException('An admin with this email already exists.');
        }
        const hashed = await bcrypt.hash(password, this.SALT_ROUNDS);
        const { token, expiresAt } = this.generateVerificationToken(email, name);
        await this.prisma.admin.create({
            data: {
                name: name.trim(),
                email: normalizedEmail,
                password: hashed,
                emailVerified: false,
                emailVerificationToken: token,
                emailVerificationTokenExpiresAt: expiresAt,
            },
        });
        return {
            email: normalizedEmail,
            message: 'Registration successful. Please verify your email using the verification token (or link) before logging in.',
            verificationToken: token,
        };
    }
    async addAdmin(name, email, password) {
        const normalizedEmail = email.trim().toLowerCase();
        const existing = await this.prisma.admin.findUnique({
            where: { email: normalizedEmail },
        });
        if (existing) {
            throw new ConflictException('An admin with this email already exists.');
        }
        const hashed = await bcrypt.hash(password, this.SALT_ROUNDS);
        const { token, expiresAt } = this.generateVerificationToken(email, name);
        await this.prisma.admin.create({
            data: {
                name: name.trim(),
                email: normalizedEmail,
                password: hashed,
                emailVerified: false,
                emailVerificationToken: token,
                emailVerificationTokenExpiresAt: expiresAt,
            },
        });
        return {
            email: normalizedEmail,
            message: `Admin ${normalizedEmail} added. They must verify their email (using the verification token below) before they can log in. Share the verification link or token with them.`,
            verificationToken: token,
        };
    }
    async verifyEmail(token) {
        if (!token || !token.trim()) {
            throw new BadRequestException('Verification token is required.');
        }
        const admin = await this.prisma.admin.findFirst({
            where: { emailVerificationToken: token.trim() },
        });
        if (!admin) {
            throw new UnauthorizedException('Invalid or expired verification token.');
        }
        if (admin.emailVerificationTokenExpiresAt && admin.emailVerificationTokenExpiresAt < new Date()) {
            throw new UnauthorizedException('Verification token has expired. Request a new one.');
        }
        await this.prisma.admin.update({
            where: { id: admin.id },
            data: {
                emailVerified: true,
                emailVerificationToken: null,
                emailVerificationTokenExpiresAt: null,
            },
        });
        return { message: 'Email verified successfully. You can now log in.' };
    }
    async removeAdmin(email) {
        const normalizedEmail = email.trim().toLowerCase();
        const result = await this.prisma.admin.deleteMany({
            where: { email: normalizedEmail },
        });
        return result.count > 0;
    }
    async getAllAdmins() {
        const admins = await this.prisma.admin.findMany({
            select: { email: true, name: true, emailVerified: true },
            orderBy: { email: 'asc' },
        });
        return admins;
    }
    async deleteAllAdmins() {
        await this.prisma.admin.deleteMany();
        return { message: 'All admins deleted successfully.' };
    }
    async resendVerificationToken(email) {
        const admin = await this.prisma.admin.findUnique({
            where: { email: email.trim().toLowerCase() },
        });
        if (!admin) {
            throw new UnauthorizedException('Invalid or expired verification token.');
        }
        if (admin.emailVerified) {
            throw new UnauthorizedException('Email already verified.');
        }
        const { token, expiresAt } = this.generateVerificationToken(admin.email, admin.name);
        await this.prisma.admin.update({
            where: { id: admin.id },
            data: {
                emailVerificationToken: token,
                emailVerificationTokenExpiresAt: expiresAt,
            },
        });
        this.emailService.sendMail(admin.email, 'dff86133-65ec-4d5c-b8fc-ba2d669382f5', { name: admin.name, token, expiresAt });
        return { message: 'Verification token resent successfully.' };
    }
    async dashboarddata() {
        const totalTestimonies = await this.prisma.testimony.count();
        const approvedTestimonies = await this.prisma.testimony.count({
            where: { status: ReviewStatus.APPROVED },
        });
        const rejectedTestimonies = await this.prisma.testimony.count({
            where: { status: ReviewStatus.REJECTED },
        });
        const pendingTestimonies = await this.prisma.testimony.count({
            where: { status: ReviewStatus.PENDING },
        });
        const totalCategories = await this.prisma.category.count();
        const totalAdmins = await this.prisma.admin.count();
        const submitionsThisWeek = await this.prisma.testimony.count({
            where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
        });
        const submitionsToday = await this.prisma.testimony.count({
            where: { createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
        });
        const categories = await this.prisma.category.findMany({
            select: { id: true, name: true },
        });
        const submitionByCategory = await this.prisma.testimony.groupBy({
            by: ['categoryId'],
            _count: {
                id: true,
            },
            where: { categoryId: { in: categories.map((category) => category.id) } },
        });
        const categorieswithcount = categories.map((category) => {
            const count = submitionByCategory.find((submition) => submition.categoryId === category.id);
            return {
                categoryId: category.id,
                categoryName: category.name,
                count: count?._count.id || 0,
            };
        });
        const totalViews = await this.prisma.testimony.aggregate({
            _sum: {
                views: true,
            },
        });
        const totalShares = await this.prisma.testimony.aggregate({
            _sum: {
                shared: true,
            },
        });
        return { totalTestimonies, approvedTestimonies, rejectedTestimonies, pendingTestimonies, totalCategories, totalAdmins, submitionsThisWeek, submitionsToday, totalViews, totalShares, categorieswithcount };
    }
};
AdminService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        EmailService])
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map