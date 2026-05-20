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
    deleteAllAdmins(): Promise<{
        message: string;
    }>;
    resendVerificationToken(email: string): Promise<{
        message: string;
    }>;
    dashboardStats(): Promise<{
        totalTestimonies: number;
        approvedTestimonies: number;
        rejectedTestimonies: number;
        pendingTestimonies: number;
        totalCategories: number;
        totalAdmins: number;
        submitionsThisWeek: number;
        submitionsToday: number;
        totalViews: import(".prisma/client").Prisma.GetTestimonyAggregateType<{
            _sum: {
                views: true;
            };
        }>;
        totalShares: import(".prisma/client").Prisma.GetTestimonyAggregateType<{
            _sum: {
                shared: true;
            };
        }>;
        categorieswithcount: {
            categoryId: number;
            categoryName: string;
            count: number;
        }[];
    }>;
}
//# sourceMappingURL=admin.controller.d.ts.map