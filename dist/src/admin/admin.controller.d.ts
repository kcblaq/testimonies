import { JwtService } from '@nestjs/jwt';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin-login.dto';
import { AdminRegisterDto } from './dto/admin-register.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
export declare class AdminController {
    private readonly adminService;
    private readonly jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    login(dto: AdminLoginDto): Promise<{
        access_token: string;
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        message: string;
    }>;
    register(dto: AdminRegisterDto): Promise<{
        email: string;
        message: string;
        verificationToken: string;
    }>;
    addAdmin(dto: AdminRegisterDto): Promise<{
        email: string;
        message: string;
        verificationToken: string;
    }>;
    removeAdmin(email: string): Promise<{
        message: string;
    }>;
    listAdmins(): Promise<{
        email: string;
        name: string;
        emailVerified: boolean;
    }[]>;
}
