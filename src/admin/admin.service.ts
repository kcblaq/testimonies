import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';
import { EmailService } from '../email/email.service';

const VERIFICATION_TOKEN_BYTES = 32;
const VERIFICATION_EXPIRY_HOURS = 24;

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    ) {}

  private readonly SALT_ROUNDS = 10;

  async isAdmin(email: string): Promise<boolean> {
    if (!email) return false;
    const admin = await this.prisma.admin.findUnique({
      where: { email: email.trim().toLowerCase() },
    });
    return !!admin;
  }

  async validateAdmin(
    email: string,
    password: string,
  ): Promise<{ email: string; name: string }> {
    const normalizedEmail = email.trim().toLowerCase();
    const admin = await this.prisma.admin.findUnique({
      where: { email: normalizedEmail },
    });
    if (!admin) {
      throw new UnauthorizedException('Invalid email or password.');
    }
    if (!admin.emailVerified) {
      throw new UnauthorizedException(
        'Please verify your email before logging in. Check your inbox for the verification link.',
      );
    }
    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      throw new UnauthorizedException('Invalid email or password.');
    }
    return { email: admin.email, name: admin.name };
  }

  generateVerificationToken(
    email: string,
    name: string,
  ): { token: string; expiresAt: Date} {
    const token = randomBytes(VERIFICATION_TOKEN_BYTES).toString('hex');
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + VERIFICATION_EXPIRY_HOURS);
    this.emailService.sendMail(email, 'dff86133-65ec-4d5c-b8fc-ba2d669382f5', {token, name, expiresAt})
    return { token, expiresAt };
  }

  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<{ email: string; message: string; verificationToken: string }> {
    const count = await this.prisma.admin.count();
    if (count > 0) {
      throw new BadRequestException(
        'Registration is only allowed when no admins exist. Use an existing admin to add more.',
      );
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
      message:
        'Registration successful. Please verify your email using the verification token (or link) before logging in.',
      verificationToken: token,
    };
  }

  async addAdmin(
    name: string,
    email: string,
    password: string,
  ): Promise<{ email: string; message: string; verificationToken: string }> {
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

  async verifyEmail(token: string): Promise<{ message: string }> {
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

  async removeAdmin(email: string): Promise<boolean> {
    const normalizedEmail = email.trim().toLowerCase();
    const result = await this.prisma.admin.deleteMany({
      where: { email: normalizedEmail },
    });
    return result.count > 0;
  }

  async getAllAdmins(): Promise<{ email: string; name: string; emailVerified: boolean }[]> {
    const admins = await this.prisma.admin.findMany({
      select: { email: true, name: true, emailVerified: true },
      orderBy: { email: 'asc' },
    });
    return admins;
  }

  async deleteAllAdmins(): Promise<{ message: string }> {
    await this.prisma.admin.deleteMany();
    return { message: 'All admins deleted successfully.' };
  }

  async resendVerificationToken(email: string): Promise<{ message: string }> {
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

    this.emailService.sendMail(admin.email, 'dff86133-65ec-4d5c-b8fc-ba2d669382f5', {name: admin.name, token, expiresAt})
    return { message: 'Verification token resent successfully.' };
  }
}



