"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const node_crypto_1 = require("node:crypto");
const email_service_1 = require("../email/email.service");
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
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        if (!admin.emailVerified) {
            throw new common_1.UnauthorizedException('Please verify your email before logging in. Check your inbox for the verification link.');
        }
        const valid = await bcrypt.compare(password, admin.password);
        if (!valid) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        return { email: admin.email, name: admin.name };
    }
    generateVerificationToken(email, name) {
        const token = (0, node_crypto_1.randomBytes)(VERIFICATION_TOKEN_BYTES).toString('hex');
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + VERIFICATION_EXPIRY_HOURS);
        this.emailService.sendMail(email, 'dff86133-65ec-4d5c-b8fc-ba2d669382f5', { token, name, expiresAt });
        return { token, expiresAt };
    }
    async register(name, email, password) {
        const count = await this.prisma.admin.count();
        if (count > 0) {
            throw new common_1.BadRequestException('Registration is only allowed when no admins exist. Use an existing admin to add more.');
        }
        const normalizedEmail = email.trim().toLowerCase();
        const existing = await this.prisma.admin.findUnique({
            where: { email: normalizedEmail },
        });
        if (existing) {
            throw new common_1.ConflictException('An admin with this email already exists.');
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
            throw new common_1.ConflictException('An admin with this email already exists.');
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
            throw new common_1.BadRequestException('Verification token is required.');
        }
        const admin = await this.prisma.admin.findFirst({
            where: { emailVerificationToken: token.trim() },
        });
        if (!admin) {
            throw new common_1.UnauthorizedException('Invalid or expired verification token.');
        }
        if (admin.emailVerificationTokenExpiresAt && admin.emailVerificationTokenExpiresAt < new Date()) {
            throw new common_1.UnauthorizedException('Verification token has expired. Request a new one.');
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
            throw new common_1.UnauthorizedException('Invalid or expired verification token.');
        }
        if (admin.emailVerified) {
            throw new common_1.UnauthorizedException('Email already verified.');
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
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        email_service_1.EmailService])
], AdminService);
//# sourceMappingURL=admin.service.js.map